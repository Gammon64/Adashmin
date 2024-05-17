"use client";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { Button } from "@chakra-ui/react";

const NewButton = () => {
  return (
    <Link href="funcionario">
      <Button colorScheme="purple" leftIcon={<AddIcon />}>
        Novo
      </Button>
    </Link>
  );
};

export default NewButton;
