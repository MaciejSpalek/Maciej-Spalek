import { Dashboard } from "layouts/Dashboard";
import { Main } from "layouts/Main";
import { useRouter } from "next/router";
import React from "react";

export const LayoutRenderer = ({ children }) => {
  const { route } = useRouter();
  const isAdminPanel = route.includes("admin");
  
  return isAdminPanel ? (
    <Dashboard>{children}</Dashboard>
  ) : (
    <Main>{children}</Main>
  );
};
