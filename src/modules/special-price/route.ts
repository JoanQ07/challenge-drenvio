import { ctrlSprice } from "./controller";
import { Router } from "express";

const router = Router();

router.post("/register", ctrlSprice.registerSpecialPrice);

export default router;
