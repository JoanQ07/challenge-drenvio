import dataContext from "../../helper/dataContext";
import { IUser } from "./model";

const createUser = async (data: IUser) => {
  try {
    const newUser = await dataContext.userModel.create(data);
    return newUser;
  } catch (error) {
    throw error;
  }
};
export const servicesUser = { createUser };