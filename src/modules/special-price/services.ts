import dataContext from "../../helper/dataContext";
import { ISpecialPrice } from "./model";

const registerSpecialPrice = async (data: ISpecialPrice) => {
  try {
    const newSprice = await dataContext.SpriceModel.create(data);
    return newSprice;
  } catch (error) {
    throw error;
  }
};
export const servicesSprice = { registerSpecialPrice };
