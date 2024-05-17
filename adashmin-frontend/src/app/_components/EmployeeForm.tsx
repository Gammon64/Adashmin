"use client";
import { Button, Input, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { salvar } from "../funcionario/actions";
import { Funcionario } from "@/app/_types/funcionario";

const EmployeeForm = ({ funcionario }: { funcionario?: Funcionario }) => {
  const toast = useToast();
  const method = useForm();

  useEffect(() => {
    if (funcionario) {
      method.reset(funcionario);
    }
  }, [funcionario, method]);

  /**
   * Envia o funcionário para o backend
   */
  const onSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // O HandleSubmit do React-Hook-Form compila os valores do formulário em um objeto data
    method.handleSubmit((data) => {
      toast.promise(salvar(data, funcionario?._id), {
        success: { title: "Sucesso!", description: "Funcionário salvo" },
        error: { title: "Erro!", description: "Funcionário não foi salvo" },
        loading: { title: "Enviando...", description: "Aguarde um momento" },
      });
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
          valueAsDate: true,
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
