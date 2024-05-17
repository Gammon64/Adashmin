import { Router } from "express";
import FuncionarioModel from "../model/funcionario";

/**
 * Endpoints para operaćões CRUD de funcionários
 */
const funcionario_route = Router();

/**
 * Busca todos os funcionários.
 * Se houver query, filtra por nome, cargo ou departamento.
 */
funcionario_route.get("/employees", async (req, res) => {
  try {
    const query = req.query.query;
    // Busca se contém o texto em nome, cargo ou departamento.
    const filter = {
      $or: [
        { nome: { $regex: ".*" + query + ".*", $options: "i" } },
        { cargo: { $regex: ".*" + query + ".*", $options: "i" } },
        { departamento: { $regex: ".*" + query + ".*", $options: "i" } },
      ],
    };
    // Se query não for indefinida, aplico o filtro, se não, retorno todos os funcionários
    const funcionarios = await FuncionarioModel.find(query ? filter : {});
    res.send(funcionarios);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar funcionários");
  }
});

/**
 * Busca um funcionário pelo ID
 */
funcionario_route.get("/employees/:id", async (req, res) => {
  try {
    const funcionario = await FuncionarioModel.findById(req.params.id);
    res.send(funcionario);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro interno ao buscar funcionário");
  }
});

/**
 * Cria um novo funcionário
 */
funcionario_route.post("/employees", async (req, res) => {
  try {
    // Pega o body da requisição e cria um novo funcionário
    const funcionario = new FuncionarioModel(req.body);
    await funcionario.save();
    res.send(funcionario);
  } catch (error: any) {
    console.error(error);
    if (error.name === "ValidationError" || error.name === "CastError")
      res.status(400).send("Dados inválidos: " + error.message);
    else res.status(500).send("Erro interno ao criar funcionário");
  }
});

/**
 * Atualiza um funcionário pelo ID
 */
funcionario_route.put("/employees/:id", async (req, res) => {
  try {
    const funcionario = await FuncionarioModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(funcionario);
  } catch (error: any) {
    console.error(error);
    if (error.name === "ValidationError" || error.name === "CastError")
      res.status(400).send("Dados inválidos: " + error.message);
    else res.status(500).send("Erro interno ao atualizar funcionário");
  }
});

/**
 * Exclui um funcionário pelo ID
 */
funcionario_route.delete("/employees/:id", async (req, res) => {
  try {
    await FuncionarioModel.findByIdAndDelete(req.params.id);
    res.send("Funcionário excluído com sucesso");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro interno ao excluir funcionário");
  }
});

export default funcionario_route;
