import dataContext from "../../helper/dataContext";
import { Response, Request } from "express";
import { ISpecialPrice } from "./model";
import { IProdcut } from "../product/model";

const registerSpecialPrice = async (data: ISpecialPrice) => {
  try {
    const newSprice = await dataContext.SpriceModel.create(data);
    return newSprice;
  } catch (error) {
    throw error;
  }
};

const searchDiscountByUser = async ({ params }: Request) => {
  try {
    let response: IProdcut;

    const product = await dataContext.productModel
      .findOne({
        name: { $regex: new RegExp(params.nameProduct, "i") },
      })
      .populate("idBrand");

    if (!product) return null;

    const validSprice = await dataContext.SpriceModel.findOne({
      $and: [{ idUser: params.idUser }, { idBrand: product.idBrand }],
    });

    if (validSprice) {
      return (response = { ...product?.toObject(), price: product.price * Number(validSprice.discount) });
    } else response = product;

    return response;
  } catch (error) {
    throw error;
  }
};
export const servicesSprice = { registerSpecialPrice, searchDiscountByUser };
