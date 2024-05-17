export type Funcionario = {
  _id: string;
  nome: string;
  cargo: string;
  departamento: string;
  dataAdmissao: string;
};

export const buildFuncionario = (data: any): Funcionario => {
  // Formata a data de yyyy-MM-ddThh:mm:ss para yyyy-MM-dd
  return {
    ...data,
    dataAdmissao: new Date(data.dataAdmissao).toISOString().split("T")[0],
  };
};
