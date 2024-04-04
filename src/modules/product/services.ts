import dataContext from "../../helper/dataContext";
import { IProdcut } from "./model";

const createProduct = async (data: IProdcut) => {
  try {
    const newProduct = await dataContext.productModel.create(data);
    return newProduct;
  } catch (error) {
    throw error;
  }
};

const searchProductByStock = async () => {
  try {
    const newProduct = await dataContext.productModel.find({ stock: { $gt: 0 } });
    return newProduct;
  } catch (error) {
    throw error;
  }
};
export const servicesProduct = { createProduct, searchProductByStock };
