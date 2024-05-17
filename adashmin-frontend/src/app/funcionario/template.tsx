import React from "react";
import style from "./funcionario.module.css";
import { Card, CardBody } from "@chakra-ui/react";

const CadastroFuncionarioTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className={style.main}>
      <Card>
        <CardBody>{children}</CardBody>
      </Card>
    </main>
  );
};

export default CadastroFuncionarioTemplate;
