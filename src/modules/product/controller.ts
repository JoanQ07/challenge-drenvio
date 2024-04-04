import { errorHttp, resHttp } from "../../helper";
import { servicesProduct } from "./services";
import { Response, Request } from "express";

const createProduct = async ({ body }: Request, res: Response) => {
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

const searchProductByStock = async ({ body }: Request, res: Response) => {
  try {
    const data = await servicesProduct.searchProductByStock();
    const message = data.length > 0 ? `${data.length} productos capturados` : "Sin productos con stock"
    return resHttp({
      res,
      data,
      message,
    });
  } catch (error: any) {
    errorHttp({ res, data: error });
  }
};

export const ctrlProduct = { createProduct, searchProductByStock };
