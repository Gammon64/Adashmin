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
  "https://vercel.com",
];
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    console.log("🚀 ~ origin:", origin);
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else callback(new Error("Not allowed by CORS"));
  },
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/", funcionario_route);

app.get("/", (req, res) => {
  res.send("Boas vindas à API Adashmin!");
});

export default app;
