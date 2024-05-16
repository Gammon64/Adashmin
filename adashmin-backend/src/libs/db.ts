import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  const uri = `${process.env.DB_SERVER}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}/${process.env.DB_NAME}`;
  await mongoose.connect(uri);
  // Confere a conexão sendo: 0 - desconectado, 1 - conectado, 2 - conectando, 3 - desconectando
  console.log("Conexão com o banco:", mongoose.connection.readyState);
}
