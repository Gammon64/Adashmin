import { Schema, model } from "mongoose";

/**
 * Define o esquema e seus campos
 */
const funcionario = new Schema({
  nome: { type: String, required: true },
  cargo: { type: String, required: true },
  departamento: { type: String, required: true },
  dataAdmissao: { type: Date, required: true },
});

const FuncionarioModel = model("Funcionario", funcionario);

export default FuncionarioModel;
