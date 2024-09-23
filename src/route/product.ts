import { Router, Request, Response } from 'express';
import Product from '../model/product.js';

const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
    const product = Product.find();
    res.send('Hello World');
});

export default router;