/**
 * Configura o servidor Express.js
 */
import express from "express";
import funcionario_route from "../routes/funcionario";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());
app.use("/", funcionario_route);

app.get("/", (req, res) => {
  res.send("Boas vindas à API Adashmin!");
});

export default app;
