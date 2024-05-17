import { buildFuncionario } from "@/app/_types/funcionario";
import EmployeeForm from "@/app/funcionario/_components/EmployeeForm";

const getData = async (id: string) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/employees/" + id,
    {
      method: "GET",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // Garante que o dado retornado tenha o tipo Funcionario
  const funcionario = buildFuncionario(await res.json());
  return funcionario;
};

const CadastroFuncionario = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);
  return <EmployeeForm funcionario={data} />;
};

export default CadastroFuncionario;
