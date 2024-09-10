"use client";
import { Link } from "@chakra-ui/next-js";
import { Avatar } from "@chakra-ui/react";
import React from "react";

const UserAvatar = () => {
  return (
    <Link isExternal href="https://github.com/Gammon64/Adashmin">
      <Avatar name="Gammon Sistemas" />
    </Link>
  );
};

export default UserAvatar;
