import FuncionarioForm from "@/app/funcionario/_components/FuncionarioForm";
import { buscarUm } from "../actions";

const CadastroFuncionario = async ({ params }: { params: { id: string } }) => {
  const data = await buscarUm(params.id);
  return <FuncionarioForm funcionario={data} />;
};

export default CadastroFuncionario;
