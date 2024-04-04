import { errorHttp, resHttp } from "../../helper";
import { servicesProduct } from "./services";
import { Response, Request } from "express";

const createUser = async ({ body }: Request, res: Response) => {
  try {
    const data = await servicesProduct.createProduct(body);

    return resHttp({
      res,
      data,
      message: `Producto registrado ${body.name} exitosamente`,
    });
  } catch (error: any) {
    errorHttp({ res, data: error });
  }
};

export const ctrlProduct = { createUser };
