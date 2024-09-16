import { Router, Request, Response } from "express";
import User from "../model/user";

const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
    const user = User.find();
    res.send('Hello World');
});

router.post('/create', async (req: Request, res: Response) => {
    const user = new User({
        name: 'Bill',
        email: 'bill@initech.com',
        avatar: 'https://i.imgur.com/dM7Thhn.png'
    });
    await user.save();
})

export default router;