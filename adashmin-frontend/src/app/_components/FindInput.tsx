"use client";
import { SearchIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

/**
 * Define o filtro da consulta de funcionários.
 * @param query recebe o valor consultado para preenchimento inicial
 * @returns
 */
const FindInput = ({ query }: { query: string | undefined }) => {
  const { register, reset } = useForm();
  useEffect(() => {
    if (query) reset({ query });
  }, [query, reset]);
  return (
    <div style={{ display: "flex" }}>
      <form>
        <InputGroup>
          <Input {...register("query")} placeholder="Procurar item" />
          <InputRightElement>
            <Button leftIcon={<SearchIcon />} type="submit" />
          </InputRightElement>
        </InputGroup>
      </form>
    </div>
  );
};

export default FindInput;
