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
    errorHttp({ res, data: error });
  }
};

export const ctrlSprice = { registerSpecialPrice };
