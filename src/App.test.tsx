import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, it, describe } from "vitest";
import { MantineProvider } from '@mantine/core';
import { CartProvider } from './context/CartContext/CartContext';
import { ProductsProvider } from './context/ProductsContext/ProductsContext';


describe("App component", function () {
  it("should render App", () => {
    render(
        <MantineProvider>
            <ProductsProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </ProductsProvider>
        </MantineProvider>
    );

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});