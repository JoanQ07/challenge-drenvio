import { ObjectId, Schema, model } from "mongoose";

export interface IProdcut {
  id: ObjectId;
  name: string;
  price: number;
  idBrand: ObjectId;
  createdAt: string;
  updatedAt: string;
}

const products = new Schema<IProdcut>(
  {
    id: Object,
    name: String,
    price: Number,
    idBrand: Object,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const productModel = model<IProdcut>("products", products);
