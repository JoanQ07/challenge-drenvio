import { ctrlSprice } from "./controller";
import { Router } from "express";

const router = Router();

router.get("/search-discount/:idUser/:nameProduct", ctrlSprice.searchDiscountByUser);
router.post("/register", ctrlSprice.registerSpecialPrice);

export default router;
