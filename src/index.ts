
import express, { json } from "express";
import peopleRouter from "routes/people.routes";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import errorHandler from "middlewares/error.middleware";

dotenv.config();
const app = express();

app.use(json());
app.use(cors());
app.use(peopleRouter);
app.use(errorHandler);

const PORT: number = 5000;
app.listen(PORT, () => console.log(`Server initiated on ${PORT}`));