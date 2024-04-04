import routesSprice from "./modules/special-price/route";
import routesProduct from "./modules/product/route";
import routesBrand from "./modules/brand/route";
import routesUser from "./modules/user/route";
import { Router } from "express";

const router = Router();

router.use("/special-price", routesSprice);
router.use("/product", routesProduct);
router.use("/brand", routesBrand);
router.use("/user", routesUser);

export default router;
