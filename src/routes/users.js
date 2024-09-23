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

module.exports = router;