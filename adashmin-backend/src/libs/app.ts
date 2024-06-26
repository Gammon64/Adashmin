/**
 * Configura o servidor Express.js
 */
import express from "express";
import funcionario_route from "../routes/funcionario";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// Configuração do CORS
const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://adashmin.vercel.app/",
];
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else callback(new Error("Not allowed by CORS"));
  },
};

// Configuração do Express.js
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/", funcionario_route);

// Rota de boas vindas
app.get("/", (req, res) => {
  res.send("Boas vindas à API Adashmin!");
});

export default app;
