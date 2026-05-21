import { screen } from "@testing-library/react";
import App from "./App";
import { expect, it, describe } from "vitest";
import renderWithProviders from "./test/test-utils";

describe("App component", function () {
  it("Старотовый рендер App", () => {
    renderWithProviders(<App />);

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});