import { ctrlProduct } from "./controller";
import { Router } from "express";

const router = Router();

router.post("/create", ctrlProduct.createBrand);

export default router;