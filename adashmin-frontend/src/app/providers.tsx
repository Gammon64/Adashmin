import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default Providers;
