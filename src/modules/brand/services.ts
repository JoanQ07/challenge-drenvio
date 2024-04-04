import dataContext from "../../helper/dataContext";
import { IBrand } from "./model";

const createBrand = async (data: IBrand) => {
  try {
    const newBrand = await dataContext.brandModel.create(data);
    return newBrand;
  } catch (error) {
    throw error;
  }
};
export const servicesBrand = { createBrand };
