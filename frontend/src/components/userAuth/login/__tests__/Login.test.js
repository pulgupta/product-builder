import React from "react";
import { render } from "../../../../testUtils";
import Login from "../Login";
import { fireEvent } from "@testing-library/react";
import { Switch, Route } from "react-router";
import LandingPage from "../../../LandingPage";

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

  it("should submit successfully if validation passes", () => {
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

  it("should redirect to home is user is already authenticated", () => {
    const { queryByTestId } = render(
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={LandingPage} />
      </Switch>,
      {
        route: "/login",
        initialState: {
          authentication: {
            isAuthenticated: true,
          },
        },
      }
    );
    expect(queryByTestId("loginWidget")).not.toBeInTheDocument();
    expect(queryByTestId("firstContainer")).toBeInTheDocument();
  });
});
