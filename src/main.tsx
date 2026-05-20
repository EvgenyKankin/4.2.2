import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@mantine/core/styles.css'
import './reset.css'
import { ProductsProvider } from './context/ProductsContext/ProductsContext.tsx'
import { CartProvider } from './context/CartContext/CartContext.tsx'
import { MantineProvider } from '@mantine/core'

createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </MantineProvider>,
)
