import React from "react";
import { screen } from "@testing-library/react";
import { Textarea } from "./Textarea";
import { TestProvider } from "__mocks__";
import userEvent from "@testing-library/user-event";

describe("Input component", () => {
  test("renders an Textarea element", () => {
    TestProvider(<Textarea register={() => {}} id="email" />);

    const textarea = screen.getByRole("textbox");
    expect(textarea.tagName.toLowerCase()).toBe("textarea");
  });

  test("renders an Textarea element with placeholder", () => {
    TestProvider(<Textarea register={() => {}} id="email" placeholder="email" />);

    const textarea = screen.getByPlaceholderText("email");
    expect(textarea).toBeInTheDocument();
  });

  test("allows typing in Textarea", async () => {
    const handleChange = jest.fn();
    TestProvider(
      <Textarea
        onChange={handleChange}
        register={() => {}}
        id="email"
        placeholder="textbox"
      />
    );

    const textarea = screen.getByPlaceholderText("textbox");

    await userEvent.type(textarea, "Hello my friend");
    expect(handleChange).toHaveBeenCalledTimes(15);
  });

  test("checks error message", async () => {
    const error = "example error text";
    
    TestProvider(
      <Textarea
        register={() => {}}
        id="email"
        placeholder="textbox"
        error={error}
      />
    );

    const input = screen.getByText(error);
    expect(input).toBeInTheDocument();
  });
});
