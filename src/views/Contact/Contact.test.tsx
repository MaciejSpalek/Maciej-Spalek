import { screen } from "@testing-library/dom";
import { Contact } from "./Contact";
import { TestProvider } from "__mocks__";

describe("Contact", () => {
  test("check if view shows all elements", () => {
    TestProvider(<Contact />);

    expect(
      screen.getByRole("heading", { level: 1, name: /contact/i })
    ).toBeInTheDocument();
    expect(screen.getByAltText(/maciej spałek/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByText(/Let's talk!/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /If you have any questions or you're interested in any of the artworks, feel free to send me a private message — I'd love to hear from you!/i
      )
    ).toBeInTheDocument();
  });
});
