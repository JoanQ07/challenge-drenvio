import { errorHttp, resHttp } from "../../helper";
import { servicesSprice } from "./services";
import { Response, Request } from "express";

const registerSpecialPrice = async ({ body }: Request, res: Response) => {
  try {
    const data = await servicesSprice.registerSpecialPrice(body);

    return resHttp({
      res,
      data,
      message: `Precio especial registrado exitosamente`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error });
  }
};

const searchDiscountByUser = async (req: Request, res: Response) => {
  try {
    const data = await servicesSprice.searchDiscountByUser(req);
    if (!data) return errorHttp({ res, data, message: "No se encontro el producto" });

    if (data.stock < 1) return errorHttp({ res, message: "Producto sin stock" });

    return resHttp({
      res,
      data,
      message: `Producto capturado`,
    });
  } catch (error: any) {
    errorHttp({ res, message: error });
  }
};

export const ctrlSprice = { registerSpecialPrice, searchDiscountByUser };
