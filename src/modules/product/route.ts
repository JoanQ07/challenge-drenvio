import { ctrlProduct } from "./controller";
import { Router } from "express";

const router = Router();

router.get("/search-stock", ctrlProduct.searchProductByStock);
router.post("/create", ctrlProduct.createProduct);

export default router;
