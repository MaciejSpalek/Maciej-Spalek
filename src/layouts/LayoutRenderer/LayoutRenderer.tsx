import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRouter } from "next/router";
import { Dashboard } from "layouts/Dashboard";
import { Main } from "layouts/Main";
import { Meta } from "components";
import { IChildren } from "types";
import { NotificationsProvider } from "providers";

const queryClient = new QueryClient();

export const LayoutRenderer = ({ children }: IChildren) => {
  const { route } = useRouter();
  const isAdminPanel = route.includes("admin");

  return (
    <NotificationsProvider>
      <QueryClientProvider client={queryClient}>
        <Meta />
        {isAdminPanel ? (
          <Dashboard>{children}</Dashboard>
        ) : (
          <Main>{children}</Main>
        )}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </NotificationsProvider>
  );
};
