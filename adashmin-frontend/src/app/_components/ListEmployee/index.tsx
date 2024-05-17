import DataTable from "./DataTable";

/**
 * Lista todos os funcionários.
 * Caso haja query, lista todos os funcionários que contém a query.
 * @param query valor a ser filtrado
 * @returns
 */
async function getData(query: string | undefined) {
  // Faz a requisição para o backend, passando a query como parâmetro se existir
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/employees${
      query ? "?query=" + query : ""
    }`,
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ListEmployee = async ({ query }: { query: string | undefined }) => {
  const data = await getData(query);
  return <DataTable data={data} />;
};

export default ListEmployee;
