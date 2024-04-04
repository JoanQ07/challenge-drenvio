import mongoose, { Decimal128, ObjectId, Schema, model } from "mongoose";

export interface IProdcut {
  id: mongoose.Schema.Types.ObjectId;
  name: string;
  price: number;
  stock: number;
  idBrand: mongoose.Schema.Types.ObjectId;
  createdAt: string;
  updatedAt: string;
}

const products = new Schema<IProdcut>(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: String,
    stock: Number,
    price: Number,
    idBrand: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const productModel = model<IProdcut>("products", products);
