import React from "react";
import { render } from "../../../../testUtils";
import Login from "../Login";
import { fireEvent } from "@testing-library/react";

describe("Login should work fine for any user", () => {

  it("should render the login control", () => {
    const { getByTestId } = render(<Login />);
    expect(getByTestId("loginWidget")).toBeInTheDocument();
  });

  it("should render error for username and password", () => {
    const { queryByText, getByTestId } = render(<Login />);
    fireEvent.click(getByTestId("submit"));
    expect(
      queryByText("Username should be more than 8 characters")
    ).toBeInTheDocument();
    expect(
      queryByText("Password should be more than 8 characters")
    ).toBeInTheDocument();
  });

  it("should render error only for username", () => {
    const { queryByText, getByTestId } = render(<Login />);
    fireEvent.change(getByTestId("username"), {
      target: { id: "username", value: "username" },
    });
    fireEvent.change(getByTestId("password"), {
      target: { id: "password", value: "password" },
    });
    fireEvent.click(getByTestId("submit"));
    expect(queryByText("Username should be more than 8 characters")).toBe(null);
    expect(queryByText("Password should be more than 8 characters")).toBe(null);
  });
});
