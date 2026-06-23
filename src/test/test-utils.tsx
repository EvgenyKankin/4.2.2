import { render } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import type { ReactNode } from 'react';
import { configureStore } from '@reduxjs/toolkit';

import productsReducer from '../features/productsSlice';
import cartReducer from '../features/cartSlice';

function renderWithProviders(ui: ReactNode) {
  const testStore = configureStore({
    reducer: {
      products: productsReducer,
      cart: cartReducer,
    },
  });

  return render(
    <Provider store={testStore}>
      <MantineProvider>
        {ui}
      </MantineProvider>
    </Provider>
  );
}

export default renderWithProviders;