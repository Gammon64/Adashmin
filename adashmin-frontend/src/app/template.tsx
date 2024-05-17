import React, { Suspense } from "react";
import Header from "./_components/Header";
import Loading from "./loading";

const AppTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      {children}
    </Suspense>
  );
};

export default AppTemplate;
