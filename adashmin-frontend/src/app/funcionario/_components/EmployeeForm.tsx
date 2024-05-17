"use client";
import { Funcionario } from "@/app/_types/funcionario";
import { Link } from "@chakra-ui/next-js";
import { Button, Input, InputGroup, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { salvar } from "../actions";
import { useRouter } from "next/navigation";

const EmployeeForm = ({ funcionario }: { funcionario?: Funcionario }) => {
  const toast = useToast();
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (funcionario) {
      reset(funcionario);
    }
  }, [funcionario, reset]);

  /**
   * Envia o funcionário para o backend
   */
  const onSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // O HandleSubmit do React-Hook-Form valida os valores do formulário e retorna-os em um objeto data
    handleSubmit((data) => {
      salvar(data, funcionario?._id)
        .then(() => {
          toast({
            title: "Sucesso!",
            description: "Funcionário salvo",
            status: "success",
            isClosable: true,
          });
          router.push("/");
        })
        .catch((error) =>
          toast({
            title: "Erro!",
            description: error.message,
            status: "error",
            isClosable: true,
          })
        );
    })();
  };

  // Styles reutilizados
  const inputGroupStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const spanStyle: React.CSSProperties = {
    color: "red",
    fontSize: "0.75rem",
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
      <InputGroup style={inputGroupStyle}>
        <Input
          placeholder="Nome"
          {...register("nome", {
            required: true,
          })}
        />
        {errors.nome && <span style={spanStyle}>Este campo é obrigatório</span>}
      </InputGroup>
      <InputGroup style={inputGroupStyle}>
        <Input
          placeholder="Cargo"
          {...register("cargo", {
            required: true,
          })}
        />
        {errors.cargo && (
          <span style={spanStyle}>Este campo é obrigatório</span>
        )}
      </InputGroup>
      <InputGroup style={inputGroupStyle}>
        <Input
          placeholder="Departamento"
          {...register("departamento", {
            required: true,
          })}
        />
        {errors.departamento && (
          <span style={spanStyle}>Este campo é obrigatório</span>
        )}
      </InputGroup>

      <InputGroup style={inputGroupStyle}>
        <Input
          placeholder="Data de admissão"
          {...register("dataAdmissao", {
            required: true,
            valueAsDate: true,
          })}
          type="date"
        />
        {errors.dataAdmissao && (
          <span style={spanStyle}>Este campo é obrigatório</span>
        )}
      </InputGroup>

      <footer
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "1rem",
        }}
      >
        <Link href="/">
          <Button colorScheme="pink">Cancelar</Button>
        </Link>
        <Button variant="ghost" type="submit">
          Salvar
        </Button>
      </footer>
    </form>
  );
};

export default EmployeeForm;
