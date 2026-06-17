import { createRoot } from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css'
import './reset.css'
import { CartProvider } from './context/CartContext/CartContext.tsx'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux';
import { store } from './features/store';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <MantineProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </MantineProvider>
  </Provider>
)
