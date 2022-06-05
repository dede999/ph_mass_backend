import dotenv from "dotenv";
import helmet from "helmet";
import express, { Request, Response } from "express";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(helmet());
app.use(cors({
  origin: ["http://localhost:8080", "https://frontend-ph-missas.vercel.app"],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.get("/", (req: Request, resp: Response) => {
  resp.send({ request: req.body, message: `Hello World at ${new Date()}` });
});

app.listen(port, () => {
  console.log("Server is up and running on port");
});
