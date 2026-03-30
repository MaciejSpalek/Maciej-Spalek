import { screen } from "@testing-library/react";
import { TestProvider } from "__mocks__";
import { Login } from "./Login";

describe("Login", () => {
	test("check if view shows all elements", () => {
		TestProvider(<Login />);

		expect(
			screen.getByRole("heading", { level: 1, name: /Panel Admina/i }),
		).toBeInTheDocument();
		expect(screen.getByText(/Powrót/i)).toBeInTheDocument();
		expect(screen.getByText(/Wyślij/i)).toBeInTheDocument();
		expect(screen.getByLabelText("Login")).toBeInTheDocument();
		expect(screen.getByLabelText("Hasło")).toBeInTheDocument();
	});
});
