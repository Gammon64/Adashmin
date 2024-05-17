import { Link } from "@chakra-ui/next-js";
import { Avatar } from "@chakra-ui/react";
import React from "react";
import HomeButton from "./HomeButton";
import UserAvatar from "./UserAvatar";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <HomeButton />
      <h1>Gerenciamento de funcionários</h1>
      <UserAvatar />
    </header>
  );
};

export default Header;
