import mongoose, { Decimal128, Schema, model } from "mongoose";

export interface IUser {
  id: mongoose.Schema.Types.ObjectId;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const users = new Schema<IUser>(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const userModel = model<IUser>("users", users);
