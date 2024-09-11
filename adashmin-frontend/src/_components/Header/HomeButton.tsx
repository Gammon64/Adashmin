import Link from "next/link";

const HomeButton = () => {
  return (
    <Link
      href="/"
      style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        padding: "0.5rem",
        textDecoration: "none",
        color: "#007070",
      }}
    >
      Adashmin
    </Link>
  );
};

export default HomeButton;
