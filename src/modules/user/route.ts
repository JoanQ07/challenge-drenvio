import { ctrlUser } from "./controller";
import { Router } from "express";

const router = Router();

router.post("/create", ctrlUser.createUser);

export default router;