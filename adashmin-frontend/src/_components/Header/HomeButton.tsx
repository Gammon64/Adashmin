"use client";

import { Link } from "@chakra-ui/next-js";

const HomeButton = () => {
  return (
    <Link
      href="/"
      colorScheme="purple"
      style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        padding: "0.5rem",
        textDecoration: "none",
      }}
    >
      Adashmin
    </Link>
  );
};

export default HomeButton;
