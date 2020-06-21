import React from "react";
import LandingPage from "../LandingPage";
import { render } from "@testing-library/react";

describe("should render landing page correctly", () => {

  it("should render the first widget on load", () => {
    const { getByTestId } = render(<LandingPage />);
    expect(getByTestId("firstContainer")).toBeInTheDocument();
  });

  it("should render the second widget on load", () => {
    const { getByTestId } = render(<LandingPage />);
    expect(getByTestId("secondContainer")).toBeInTheDocument();
  });

  it("should render the third widget on load", () => {
    const { getByTestId } = render(<LandingPage />);
    expect(getByTestId("thirdContainer")).toBeInTheDocument();
  });

  it("should render the forth widget on load", () => {
    const { getByTestId } = render(<LandingPage />);
    expect(getByTestId("forthContainer")).toBeInTheDocument();
  });
});
