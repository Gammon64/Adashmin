import React from "react";
import style from "./funcionario.module.css";

const CadastroFuncionarioTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <main className={style.main}>{children}</main>;
};

export default CadastroFuncionarioTemplate;
