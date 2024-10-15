import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import UserModel from "../model/User.js";

const router = express.Router();

router.get('/cart', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const users = await UserModel.find();
		res.json(users);
	} catch (err) {
		next(err);
	}
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const users = await UserModel.find();
		res.json(users);
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const user = await UserModel.findById(req.params.id);
		res.json(user);
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const user = await UserModel.create(req.body);
		res.json(user);
	} catch (err) {
		next(err);
	}
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
	try {
		await UserModel.findByIdAndUpdate(req.params.id, req.body);
		const user = await UserModel.findById(req.params.id); // Await added here
		res.json(user);
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const user = await UserModel.findByIdAndDelete(req.params.id);
		res.json(user);
	} catch (err) {
		next(err);
	}
});

export default router;