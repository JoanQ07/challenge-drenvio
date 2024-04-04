import { IBrand } from "./model";
import dataContext from "../../helper/dataContext";

const createBrand = async (data: IBrand) => {
  try {
    const newBrand = await dataContext.productModel.create(data);
    return newBrand;
  } catch (error) {
    throw error;
  }
};
export const servicesBrand = { createBrand };
