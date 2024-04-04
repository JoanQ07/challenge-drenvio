import { ObjectId, Schema, model } from "mongoose";

export interface IUser {
  id: ObjectId;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const users = new Schema<IUser>(
  {
    id: Object,
    name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const userModel = model<IUser>("users", users);
