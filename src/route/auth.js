const express = require("express");
require('dotenv').config();
const router = express.Router(); 
const mongoose = require("mongoose");
const User = require("../model/User.js");
const bcrypt = require("bcrypt")

router.post('/sign-up', async (req, res) => {
	try {
		const {fullname, username, password, email} = req.body;
		console.log(password);
		const password_hashed = await bcrypt.hash(password, 10);
		const user_data = {
			fullname,
			username,
			password: password_hashed,
			email,
		};
		console.log(user_data);
		const user = await User.create(user_data);
		return (res.json(user));
	} catch (error) {
		return (res.json({
			error	
		}));

	}
});

router.post('/sign-in', async (req, res) => {
	try {
		const {username, password} = req.body;
		let user_data = await User.findOne({ username });

		console.log(user_data);
		const match = await bcrypt.compare(password, user_data.password)
		if (!match){
			res.status(400).json({
				message: "login Failed (wrong username or password)"
			})
			return (false);
		}
		res.json({
			message: "login success",

		})


	} catch (error) {
		console.error("error: ", error);
		res.status(401).json({
			message: 'Login Failed'
		})
	}
});

module.exports = router;
