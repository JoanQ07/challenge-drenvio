import "dotenv/config";

import { dbConnect } from "./helper/configMongo";
import routes from "./routes";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT;
const app = express();

// app.use("/", (req, res) => res.send("API 🟢"));
app.use(express.json());
app.use(cors());

app.use(routes);
console.clear();

app.listen(PORT, () => {
  console.log(`🟢 API --> ${PORT}`);
});
dbConnect();
