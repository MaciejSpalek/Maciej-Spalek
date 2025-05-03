import { screen, waitFor } from "@testing-library/react";
import { Contact } from "./Contact";
import { TestProvider } from "__mocks__";
import userEvent from "@testing-library/user-event";

describe("Contact view", () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_SITE_KEY = "mocked-site-key";
  });

  test("should display all elements", () => {
    TestProvider(<Contact />);

    expect(
      screen.getByRole("heading", { level: 1, name: /contact/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Let's talk!/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /If you have any questions or you're interested in any of the artworks, feel free to send me a private message — I'd love to hear from you!/i
      )
    ).toBeInTheDocument();
    expect(screen.getByAltText(/maciej spałek/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  test("should show correct value in inputs", async () => {
    TestProvider(<Contact />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByRole("textbox", { name: /message/i });

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

  test("should show 'Minimum 2 characters' message for name input", async () => {
    TestProvider(<Contact />);

    const nameInput = screen.getByLabelText(/name/i);

    await userEvent.type(nameInput, "m");

    await waitFor(() => {
      const errorText = screen.getByText(/Minimum 2 characters/i);
      expect(errorText).toBeInTheDocument();
    });
  });

  test("should show 'Email format is not valid' message for name input", async () => {
    TestProvider(<Contact />);

    const nameInput = screen.getByLabelText(/email/i);

    await userEvent.type(nameInput, "example text");

    await waitFor(() => {
      const errorText = screen.getByText(/Email format is not valid/i);
      expect(errorText).toBeInTheDocument();
    });
  });
});
