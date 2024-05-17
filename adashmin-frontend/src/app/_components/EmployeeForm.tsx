"use client";
import { Button, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Funcionario } from "./ListEmployee";
import { useToast } from "@chakra-ui/react";

const EmployeeForm = ({ funcionario }: { funcionario?: Funcionario }) => {
  const toast = useToast();
  const method = useForm();

  useEffect(() => {
    if (funcionario) {
      method.reset(funcionario);
    }
  }, [funcionario]);

  /**
   * Envia o funcionário para o backend
   */
  const onSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    method.handleSubmit((data) => {
      toast.promise(
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/employees/${
            funcionario?._id ?? ""
          }`,
          {
            method: "POST",
            body: JSON.stringify(data),
          }
        ),
        {
          success: { title: "Sucesso!", description: "Funcionário salvo" },
          error: { title: "Erro!", description: "Funcionário não foi salvo" },
          loading: { title: "Enviando...", description: "Aguarde um momento" },
        }
      );
    })();
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
      <Button variant="ghost" type="submit">
        Salvar
      </Button>
    </form>
  );
};

export default EmployeeForm;
