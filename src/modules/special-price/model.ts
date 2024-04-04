import mongoose, { Decimal128, Schema, model } from "mongoose";

export interface ISpecialPrice {
  id: mongoose.Schema.Types.ObjectId;
  idUser: mongoose.Schema.Types.ObjectId;
  idBrand: mongoose.Schema.Types.ObjectId;
  discount: Decimal128;
  createdAt: string;
  updatedAt: string;
}

const specialPrice = new Schema<ISpecialPrice>(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    idUser: { type: mongoose.Schema.Types.ObjectId, required: true },
    idBrand: { type: mongoose.Schema.Types.ObjectId, required: true },
    discount: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const SpriceModel = model<ISpecialPrice>("specialPrice", specialPrice);
