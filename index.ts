import dotenv from "dotenv";
import helmet from "helmet";
import express, { Request, Response } from "express";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(helmet());

app.get("/", (req: Request, resp: Response) => {
  resp.send({ request: req.body, message: `Hello World at ${new Date()}` });
});

app.listen(port, () => {
  console.log("Server is up and running on port");
});
