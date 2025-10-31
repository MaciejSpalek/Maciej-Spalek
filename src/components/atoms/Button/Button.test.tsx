import { screen } from "@testing-library/react";
import { TestProvider } from "__mocks__";
import { Button } from "./Button";

describe("Button component", () => {
	test("renders the button with children", () => {
		TestProvider(<Button>Click</Button>);
		expect(screen.getByText("Click")).toBeInTheDocument();
	});

	test("renders progress bar", () => {
		TestProvider(<Button isLoading={true}>Click</Button>);
		expect(screen.getByRole("progressbar")).toBeInTheDocument();
	});

	test("if progressbar is not visible", () => {
		TestProvider(<Button isLoading={false}>Click</Button>);
		expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
	});
});
