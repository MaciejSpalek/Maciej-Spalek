import { Login } from "./Login";
import { screen } from "@testing-library/react";
import { TestProvider } from "__mocks__";

describe("Login tests", () => {
  
  test("check if view shows all elements", () => {
    TestProvider(<Login />);

    expect(
      screen.getByRole("heading", { level: 1, name: /admin panel/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/back/i)).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
    expect(screen.getByLabelText("Login")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });
});
