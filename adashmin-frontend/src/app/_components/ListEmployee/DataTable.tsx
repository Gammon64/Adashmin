"use client";
import { deletar } from "@/app/funcionario/actions";
import { DeleteIcon, EditIcon, UpDownIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { CSSProperties, useState } from "react";
import { Funcionario } from ".";

const DataTable = ({ data }: { data: Funcionario[] }) => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>(data);
  const toast = useToast();

  const onDelete = async (id: string) => {
    toast.promise(deletar(id), {
      success: { title: "Sucesso!", description: "Funcionário excluído" },
      error: { title: "Erro!", description: "Funcionário não foi excluído" },
      loading: { title: "Enviando...", description: "Aguarde um momento" },
    });
  };

  /**
   * Ordena a tabela de funcionários
   * @param key Campo a ser ordenado
   */
  const onSort = (key: keyof Funcionario) => {
    console.log("🚀 ~ onSort ~ key:", key);
    const sorted = [...funcionarios].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    console.log("🚀 ~ sorted ~ sorted:", sorted);
    setFuncionarios(sorted);
  };

  // Styles reutilizados
  const sortIconStyle: CSSProperties = {
    cursor: "pointer",
    width: "20px",
    height: "20px",
    marginLeft: "0.5rem",
  };

  const iconButtonStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30px",
    height: "30px",
    backgroundColor: "purple",
    color: "white",
    borderRadius: "50%",
  };

  return (
    <div>
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>
                Nome
                <UpDownIcon
                  onClick={() => onSort("nome")}
                  style={sortIconStyle}
                />
              </Th>
              <Th>
                Cargo
                <UpDownIcon
                  onClick={() => onSort("cargo")}
                  style={sortIconStyle}
                />
              </Th>
              <Th>
                Departamento
                <UpDownIcon
                  onClick={() => onSort("departamento")}
                  style={sortIconStyle}
                />
              </Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {funcionarios.map((funcionario) => (
              <Tr key={funcionario._id}>
                <Td>{funcionario.nome}</Td>
                <Td>{funcionario.cargo}</Td>
                <Td>{funcionario.departamento}</Td>
                <Td
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                  }}
                >
                  <Link
                    href={`funcionario/${funcionario._id}`}
                    style={iconButtonStyle}
                  >
                    <EditIcon />
                  </Link>
                  <button
                    style={iconButtonStyle}
                    onClick={() => onDelete(funcionario._id)}
                  >
                    <DeleteIcon />
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
