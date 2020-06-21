import React from "react";
import { render } from "../../../../testUtils";
import Login from "../Login";
import { fireEvent } from "@testing-library/react";

describe("Login should work fine for any user", () => {
  it("should render the login control", () => {
    const { getByTestId } = render(<Login/>);
    expect(getByTestId("loginWidget")).toBeInTheDocument();
  });

  it("should render the login control", () => {
    const { queryByText, getByTestId } = render(<Login/>);
    fireEvent.click(getByTestId("submit"), new MouseEvent("click"));
    expect(
      queryByText("Password should be more than 8 characters")
    ).toBeInTheDocument();
  });

  it("should render the login control", () => {
    const { queryByText, getByTestId } = render(<Login/>);
    fireEvent.click(getByTestId("submit"), new MouseEvent("click"));
    expect(
      queryByText("Username should be more than 8 characters")
    ).toBeInTheDocument();
  });
});
