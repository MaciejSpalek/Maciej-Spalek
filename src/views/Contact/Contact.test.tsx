import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestProvider } from "__mocks__";
import { Contact } from "./Contact";

describe("Contact view", () => {
	beforeEach(() => {
		process.env.NEXT_PUBLIC_SITE_KEY = "mocked-site-key";
	});

	test("should display all elements", () => {
		TestProvider(<Contact />);

		expect(
			screen.getByRole("heading", { level: 1, name: /Kontakt/i }),
		).toBeInTheDocument();
		expect(screen.getByAltText(/maciej spałek/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Imię/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Wiadomość/i)).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /Wyślij/i })).toBeInTheDocument();
	});

	test("should show correct value in inputs", async () => {
		TestProvider(<Contact />);

		const nameInput = screen.getByLabelText(/Imię/i);
		const emailInput = screen.getByLabelText(/E-mail/i);
		const messageInput = screen.getByLabelText(/Wiadomość/i);

		const nameText = "Harry z Tybetu";
		const emailText = "harryztybetu@gmail.com";
		const messageText = "Witam serdecznie.";

		await userEvent.type(nameInput, nameText);
		await userEvent.type(emailInput, emailText);
		await userEvent.type(messageInput, messageText);

		await waitFor(() => {
			expect(nameInput).toHaveValue(nameText);
		});
		await waitFor(() => {
			expect(emailInput).toHaveValue(emailText);
		});
		await waitFor(() => {
			expect(messageInput).toHaveValue(messageText);
		});
	});

	test("should show 'Minimum 2 znaki' message for name input", async () => {
		TestProvider(<Contact />);

		const nameInput = screen.getByLabelText(/Imię/i);

		await userEvent.type(nameInput, "m");

		await waitFor(() => {
			const errorText = screen.getByText(/Minimum 2 znaki/i);
			expect(errorText).toBeInTheDocument();
		});
	});

	test("should show 'Format jest niepoprawny' message for name input", async () => {
		TestProvider(<Contact />);

		const nameInput = screen.getByLabelText(/E-mail/i);

		await userEvent.type(nameInput, "example text");

		await waitFor(() => {
			const errorText = screen.getByText(/Format jest niepoprawny/i);
			expect(errorText).toBeInTheDocument();
		});
	});
});
