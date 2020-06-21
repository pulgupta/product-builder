import React from "react";
import { render } from "../../../testUtils";
import RouterSetup from "../RouterSetup";

describe("Routing should work for all urls", () => {
  it("should show information on how it works", () => {
    const { getByTestId } = render(<RouterSetup />, {
      route: "/shop/how-it-works",
    });
    expect(getByTestId("informationDetails")).toBeInTheDocument();
  });

  it("should show product information", () => {
    const { getByTestId } = render(<RouterSetup />, { route: "/" });
    expect(getByTestId("productBuilder")).toBeInTheDocument();
  });
});
