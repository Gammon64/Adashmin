"use server";

import { revalidatePath } from "next/cache";

/**
 * Lista todos os funcionários.
 * Caso haja query, lista todos os funcionários que contém a query.
 * @param query valor a ser filtrado
 * @returns
 */
export const buscar = async (query?: string) => {
  // Faz a requisição para o backend, passando a query como parâmetro se existir
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/funcionario${
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
};

export const salvar = async (data: any, id?: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/funcionario/${id ?? ""}`,
    {
      method: id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  // Revalidar os caches
  revalidatePath("/", "layout");
};

export const deletar = async (id: string) => {
  await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/funcionario/" + id, {
    method: "DELETE",
  });

  // Revalidar os caches
  revalidatePath("/", "layout");
};
