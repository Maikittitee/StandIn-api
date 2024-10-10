const express = require("express");
const router = express.Router(); 
const mongoose = require("mongoose");
const User = require("../model/User.js");
const bcrypt = require("bcrypt")

router.get('/', async (req, res, next) => {
	try {
		const users = await User.find();
		res.json(users);
	  } catch (err) {
		next(err);
	  }
});

router.get('/:id', async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
		res.json(user);
	  } catch (err) {
		next(err);
	  }
});

router.post('/', async (req, res, next) => {
	try {
		const user = await User.create(req.body)	
		return (res.json(user));
	} catch(err) {
		next(err);
	}
})

router.put('/:id', async (req, res, next) => {
	try {
		await User.findByIdAndUpdate(req.params.id, req.body);
		const user = User.findById(req.params.id);
		return (res.json(user));
	} catch(err) {
		next(err);
	}
})

router.delete('/:id', async (req, res, next) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);	
		res.json(user);
	} catch(err) {
		next(err);
	}
})

module.exports = router;