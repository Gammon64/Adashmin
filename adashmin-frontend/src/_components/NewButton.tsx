import Link from "next/link";

const NewButton = () => {
  return (
    <Link href="funcionario">
      <button
        style={{
          backgroundColor: "#007070",
        }}
      >
        Novo
      </button>
    </Link>
  );
};

export default NewButton;
