import { Router, Request, Response } from "express";
import Order from "../model/order";

const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
    const order = Order.find();
    res.send('Hello World');
});

export default router;