import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Meta } from "components";
import { Dashboard } from "layouts/Dashboard";
import { Main } from "layouts/Main";
import { useRouter } from "next/router";
import { NotificationsProvider } from "providers";
import type { IChildren } from "types";

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
