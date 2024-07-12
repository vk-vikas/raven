import express from "express";
import cors from "cors";
import BDConnection from "./db.js";
import userRouter from "./routes/userRoutes.js";

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

BDConnection();

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}s`);
});
