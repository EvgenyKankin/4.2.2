import { render } from '@testing-library/react';
import { CartProvider } from '../context/CartContext/CartContext';
import { ProductsProvider } from '../context/ProductsContext/ProductsContext';
import { MantineProvider } from '@mantine/core';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../features/store';

function renderWithProviders(ui: ReactNode) {
    return render (
        <Provider store={store}>
            <MantineProvider>
                <ProductsProvider>
                    <CartProvider>
                        {ui}
                    </CartProvider>
                </ProductsProvider>
            </MantineProvider>
        </Provider>
    )
}

export default renderWithProviders;