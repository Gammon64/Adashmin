/**
 * Configura o servidor Express.js
 */
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Boas vindas à API Adasmin!");
});

export default app;
