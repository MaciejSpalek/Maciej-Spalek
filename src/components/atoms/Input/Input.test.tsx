import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestProvider } from "__mocks__";
import { Input } from "./Input";

describe("Input component", () => {
	test("renders an input element", () => {
		TestProvider(<Input register={() => {}} id="email" />);

		const input = screen.getByRole("textbox");
		expect(input.tagName.toLowerCase()).toBe("input");
	});

	test("renders an input element with placeholder", () => {
		TestProvider(<Input register={() => {}} id="email" placeholder="email" />);

		const input = screen.getByPlaceholderText("email");
		expect(input).toBeInTheDocument();
	});

	test("allows typing in input", async () => {
		const handleChange = jest.fn();
		TestProvider(
			<Input
				onChange={handleChange}
				register={() => {}}
				id="email"
				placeholder="textbox"
			/>,
		);

		const input = screen.getByPlaceholderText("textbox");

		await userEvent.type(input, "text");

		expect(handleChange).toHaveBeenCalledTimes(4);
	});

	test("checks error message", async () => {
		const error = "example error text";

		TestProvider(
			<Input
				register={() => {}}
				id="email"
				placeholder="textbox"
				error={error}
			/>,
		);

		const input = screen.getByText(error);
		expect(input).toBeInTheDocument();
	});
});
