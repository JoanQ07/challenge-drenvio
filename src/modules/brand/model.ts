import mongoose, { Schema, model } from "mongoose";
export interface IBrand {
  id: mongoose.Schema.Types.ObjectId;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const brands = new Schema<IBrand>(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const brandModel = model<IBrand>("brands", brands);
