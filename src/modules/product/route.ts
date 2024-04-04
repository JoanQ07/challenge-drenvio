import { ctrlProduct } from "./controller";
import { Router } from "express";

const router = Router();

router.post("/create", ctrlProduct.createProduct);

export default router;
