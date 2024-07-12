import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGO_URI;

const Connection = () => {
  mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
  mongoose.connection.on("connected", () => {
    console.log("DB connected");
  });
};

export default Connection;
