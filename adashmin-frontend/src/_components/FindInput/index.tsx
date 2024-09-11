import { FaSearch } from "react-icons/fa";
import styles from "./find.module.css";

/**
 * Define o filtro da consulta de funcionários.
 * @param query recebe o valor consultado para preenchimento inicial
 * @returns
 */
const FindInput = () => {
  return (
    <form className={styles.form}>
      <input
        name="query"
        placeholder="Procurar item"
        style={{
          border: "none",
          width: "100%",
          padding: "0.5rem",
          outline: "none",
        }}
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default FindInput;
