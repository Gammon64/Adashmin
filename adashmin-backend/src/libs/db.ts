/**
 * Arquivo de conexão com o banco de dados usando Mongoose
 */
import mongoose from "mongoose";

main();

async function main() {
  const uri = `${process.env.DB_SERVER}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}/${process.env.DB_NAME}`;
  mongoose
    .connect(uri)
    .then(() => console.log("Conectado ao banco de dados"))
    .catch((err) => console.log(err));
}
