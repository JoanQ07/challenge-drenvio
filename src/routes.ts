import routesProduct from "./modules/product/route";
import routesBrand from "./modules/brand/route";
import { Router } from "express";
const router = Router();

router.use("/product", routesProduct);
router.use("/brand", routesBrand);

export default router;
