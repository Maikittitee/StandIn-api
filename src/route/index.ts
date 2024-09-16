import { Router } from "express";
import product from "./product";
import user from "./user";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World");
});

export default router
    .use("/product", product)
    .use("/user", user)
    .use("/order", product);