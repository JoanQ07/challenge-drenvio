import { errorHttp, resHttp } from "../../helper";
import { Response, Request } from "express";
import { servicesBrand } from "./services";

const createBrand = async ({ body }: Request, res: Response) => {
  try {
    const data = await servicesBrand.createBrand(body);

    return resHttp({
      res,
      data,
      message: `Marca ${body.name} registrada exitosamente`,
    });
  } catch (error: any) {
    errorHttp({ res, data: error });
  }
};

export const ctrlProduct = { createBrand };
