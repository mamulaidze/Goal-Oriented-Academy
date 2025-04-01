import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import routes from "./routes/server.routes.js"; 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api", routes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
