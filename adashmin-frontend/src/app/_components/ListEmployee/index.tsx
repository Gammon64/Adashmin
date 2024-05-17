import DataTable from "./DataTable";

export type Funcionario = {
  _id: string;
  nome: string;
  cargo: string;
  departamento: string;
  dataAdmissao: Date;
};

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/employees", {
    method: "GET",
    next: {
      revalidate: 180,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ListEmployee = async () => {
  const data = await getData();
  return (
    <div>
      <DataTable data={data} />
    </div>
  );
};

export default ListEmployee;
