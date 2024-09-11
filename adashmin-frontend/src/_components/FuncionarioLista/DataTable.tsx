"use client";

import { Funcionario } from "@/app/_types/funcionario";
import { deletar } from "@/app/funcionario/actions";
import Link from "next/link";
import { useState } from "react";
import { FaPencil, FaSort, FaTrash } from "react-icons/fa6";
import styles from "./table.module.css";

const DataTable = ({ data }: { data: Funcionario[] }) => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>(data);

  const onDelete = async (id: string) => {
    if (!confirm("Deseja realmente excluir este funcionário?")) return;
    await deletar(id).catch((error) =>
      console.error("Erro ao deletar funcionário: ", error.message)
    );
  };

  const onSort = async (key: keyof Funcionario) => {
    const sorted = [...funcionarios].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setFuncionarios(sorted);
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            Nome
            <button onClick={() => onSort("nome")} className={styles.sorter}>
              <FaSort />
            </button>
          </th>
          <th>
            Cargo
            <button onClick={() => onSort("cargo")} className={styles.sorter}>
              <FaSort />
            </button>
          </th>
          <th>
            Departamento
            <button
              onClick={() => onSort("departamento")}
              className={styles.sorter}
            >
              <FaSort />
            </button>
          </th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {funcionarios.map((funcionario) => (
          <tr key={funcionario._id}>
            <td>{funcionario.nome}</td>
            <td>{funcionario.cargo}</td>
            <td>{funcionario.departamento}</td>
            <td
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "0.25rem",
              }}
            >
              <Link
                href={`funcionario/${funcionario._id}`}
                className={styles.button}
              >
                <FaPencil />
              </Link>
              <button
                className={styles.buttondelete}
                onClick={() => onDelete(funcionario._id)}
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
