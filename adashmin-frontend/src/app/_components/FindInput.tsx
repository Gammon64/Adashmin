"use client";
import { SearchIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const FindInput = () => {
  return (
    <div style={{ display: "flex" }}>
      <InputGroup>
        <Input placeholder="Procurar item" />
        <InputRightElement>
          <Button leftIcon={<SearchIcon />} />
        </InputRightElement>
      </InputGroup>
    </div>
  );
};

export default FindInput;
