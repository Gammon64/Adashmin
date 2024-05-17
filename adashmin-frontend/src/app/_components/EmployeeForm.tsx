"use client";
import { Button, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Funcionario } from "./ListEmployee";

const EmployeeForm = ({ funcionario }: { funcionario?: Funcionario }) => {
  const method = useForm();

  useEffect(() => {
    if (funcionario) {
      method.reset(funcionario);
    }
  }, [funcionario]);

  const onSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    method.handleSubmit((data) => {
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/employees/${
          funcionario?._id ?? ""
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
    });
  };
  return (
    <form
      onSubmit={onSave}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Input
        placeholder="Nome"
        {...method.register("nome", {
          required: true,
        })}
      />
      <Input
        placeholder="Cargo"
        {...method.register("cargo", {
          required: true,
        })}
      />
      <Input
        placeholder="Departamento"
        {...method.register("departamento", {
          required: true,
        })}
      />
      <Input
        placeholder="Data de admissão"
        {...method.register("dataAdmissao", {
          required: true,
        })}
        type="datetime-local"
      />
      <Button variant="ghost">Salvar</Button>
    </form>
  );
};

export default EmployeeForm;
