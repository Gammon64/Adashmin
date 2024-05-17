import { Router } from "express";
import FuncionarioModel from "../model/funcionario";

/**
 * Endpoints para operaćões CRUD de funcionários
 */
const funcionario_route = Router();

funcionario_route.get("/employees", async (req, res) => {
  try {
    const query = req.query.query;
    const funcionarios = await FuncionarioModel.find({
      $or: [
        { nome: { $regex: ".*" + query + ".*", $options: "i" } },
        { cargo: { $regex: ".*" + query + ".*", $options: "i" } },
        { departamento: { $regex: ".*" + query + ".*", $options: "i" } },
      ],
    });
    res.send(funcionarios);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar funcionários");
  }
});

funcionario_route.get("/employees/:id", async (req, res) => {
  try {
    const funcionario = await FuncionarioModel.findById(req.params.id);
    res.send(funcionario);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar funcionário");
  }
});

funcionario_route.post("/employees", async (req, res) => {
  try {
    // Pega o body da requisição e cria um novo funcionário
    console.log("🚀 ~ funcionario_route.post ~ req.body:", req.body);
    const funcionario = new FuncionarioModel(req.body);
    await funcionario.save();
    res.send(funcionario);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao criar funcionário");
  }
});

funcionario_route.put("/employees/:id", async (req, res) => {
  try {
    const funcionario = await FuncionarioModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(funcionario);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao atualizar funcionário");
  }
});

funcionario_route.delete("/employees/:id", async (req, res) => {
  try {
    await FuncionarioModel.findByIdAndDelete(req.params.id);
    res.send("Funcionário excluído com sucesso");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao excluir funcionário");
  }
});

export default funcionario_route;
