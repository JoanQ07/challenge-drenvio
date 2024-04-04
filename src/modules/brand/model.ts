import { ObjectId, Schema, model } from "mongoose";

export interface IBrand {
  id: ObjectId;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const brands = new Schema<IBrand>(
  {
    id: Object,
    name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const brandtModel = model<IBrand>("brands", brands);
