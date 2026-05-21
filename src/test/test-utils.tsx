import { render } from '@testing-library/react';
import { CartProvider } from '../context/CartContext/CartContext';
import { ProductsProvider } from '../context/ProductsContext/ProductsContext';
import { MantineProvider } from '@mantine/core';
import type { ReactNode } from 'react';

function renderWithProviders(ui: ReactNode) {
    return render (
        <MantineProvider>
            <ProductsProvider>
                <CartProvider>
                    {ui}
                </CartProvider>
            </ProductsProvider>
        </MantineProvider>
    )
}

export default renderWithProviders;