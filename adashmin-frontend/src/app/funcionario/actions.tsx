"use server";

import { revalidatePath } from "next/cache";

export const salvar = async (data: any, id?: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/employees/${id ?? ""}`,
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
  await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/employees/" + id, {
    method: "DELETE",
  });

  // Revalidar os caches
  revalidatePath("/", "layout");
};
