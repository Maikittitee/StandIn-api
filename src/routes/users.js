const express = require("express");
const router = express.Router(); 
const mongoose = require("mongoose");
const User = require("../models/User.js");

router.get('/', async (req, res, next) => {
	try {
		const users = await User.find();
		res.json(users);
	  } catch (err) {
		next(err);
	  }
});

router.post('/', async (req, res, next) => {
	try {
		console.log(req.body)
		const user = await User.create(await req.body)	
		res.json(user);
	} catch(err) {
		next(err);
	}
})

module.exports = router;