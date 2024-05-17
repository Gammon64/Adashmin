"use server";

import { revalidatePath } from "next/cache";

export const salvar = async (data: any, id?: string) => {
  await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/employees/${id ?? ""}`, {
    method: id ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // Revalidar os caches
  revalidatePath("/", "layout");
};

export const deletar = async (id: string) => {
  await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/employees/" + id, {
    method: "DELETE",
  });

  // Revalidar os caches
  revalidatePath("/", "layout");
};
