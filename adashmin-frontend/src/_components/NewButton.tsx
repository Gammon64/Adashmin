import Link from "next/link";

const NewButton = () => {
  return (
    <Link href="funcionario">
      <button
        style={{
          backgroundColor: "#007070",
          padding: "0.7rem 1.5rem",
          border: "none",
          borderRadius: "0.5rem",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Novo
      </button>
    </Link>
  );
};

export default NewButton;
