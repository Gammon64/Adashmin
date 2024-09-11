import { buscar } from "@/app/funcionario/actions";
import DataTable from "./DataTable";

const FuncionarioLista = async ({ query }: { query: string | undefined }) => {
  const data = await buscar(query);
  return <DataTable data={data} />;
};

export default FuncionarioLista;
