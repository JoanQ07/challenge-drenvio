import { connect } from "mongoose";
import "dotenv/config";

export const dbConnect = async (): Promise<void> => {
  const DB_URI = `${process.env.DB_URI}`;
  await connect(DB_URI)
    .then(() => console.log("🟢 success connection DB "))
    .catch((err) => console.log("❌ Failed connection -> \n", err));
};
