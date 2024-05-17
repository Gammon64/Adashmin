"use client";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CSSProperties } from "react";
import { Funcionario } from ".";

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

const DataTable = ({ data }: { data: Funcionario[] }) => {
  const onDelete = async (id: string) => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/employees/" + id, {
      method: "DELETE",
    });
  };

  return (
    <div>
      <TableContainer>
        <Table variant="striped">
          {/* nome, cargo, departamento e ações */}
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Cargo</Th>
              <Th>Departamento</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((funcionario) => (
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