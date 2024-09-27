const express = require("express");
require('dotenv').config();
const router = express.Router(); 
const mongoose = require("mongoose");
const User = require("../models/User.js");
const bcrypt = require("bcrypt")

router.post('/sign-up', async (req, res) => {
	try {
		console.log("bp1");
		const {fullname, username, password, email} = req.body;
		console.log(password);
		const password_hashed = await bcrypt.hash(password, 10);
		console.log("bp2");
		const user_data = {
			fullname,
			username,
			password: password_hashed,
			email,
		};
		console.log("creating User")
		console.log(user_data);
		const user = await User.create(user_data);
		console.log("created User")
		return (res.json(user));
	} catch (error) {
		return (res.json({
			error	
		}));

	}
});

router.post('/sign-in', () => {

});

module.exports = router;
