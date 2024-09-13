"use client";
import { Funcionario } from "@/app/_types/funcionario";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { salvar } from "../actions";
import styles from "./form.module.css";
import Link from "next/link";

const FuncionarioForm = ({ funcionario }: { funcionario?: Funcionario }) => {
  const router = useRouter();
  const {
    register,
    reset,
    unregister,
    handleSubmit,
    formState: { errors },
  } = useForm<Funcionario>();

  useEffect(() => {
    if (funcionario) {
      reset(funcionario);
      unregister("_id");
    }
  }, [funcionario, reset, unregister]);

  /**
   * Envia o funcionário para o backend
   */
  const onSave = (data: Funcionario) => {
    salvar(data, funcionario?._id)
      .then(() => {
        router.push("/");
      })
      .catch((error) =>
        console.error("Erro ao salvar funcionário", error.message)
      );
  };

  const spanStyle: React.CSSProperties = {
    color: "red",
    fontSize: "0.75rem",
  };

  return (
    <form onSubmit={handleSubmit(onSave)} className={styles.form}>
      <div>
        <input
          placeholder="Nome"
          {...register("nome", {
            required: true,
          })}
        />
        {errors.nome && <span style={spanStyle}>Este campo é obrigatório</span>}
      </div>
      <div>
        <input
          placeholder="Cargo"
          {...register("cargo", {
            required: true,
          })}
        />
        {errors.cargo && (
          <span style={spanStyle}>Este campo é obrigatório</span>
        )}
      </div>
      <div>
        <input
          placeholder="Departamento"
          {...register("departamento", {
            required: true,
          })}
        />
        {errors.departamento && (
          <span style={spanStyle}>Este campo é obrigatório</span>
        )}
      </div>

      <div>
        <input
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
      </div>

      <footer
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "1rem",
        }}
      >
        <Link href="/">
          <button className={styles.cancel}>Cancelar</button>
        </Link>
        <button className={styles.submit} type="submit">
          Salvar
        </button>
      </footer>
    </form>
  );
};

export default FuncionarioForm;
