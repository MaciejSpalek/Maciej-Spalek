import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";

const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	});

export const TestProvider = (children: React.ReactNode) => {
	const queryClient = createTestQueryClient();

	return render(
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
	);
};
