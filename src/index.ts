import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Olá do Express com TypeScript!");
});

app.listen(port, () => {
  console.log(`Servidor a correr em http://localhost:${port}`);
});
