import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@mantine/core/styles.css'
import './reset.css'
import { ProductsProvider } from './components/ProductsContext/ProductsContext.tsx'
import { CartProvider } from './components/addToCart/addToCart.tsx'

createRoot(document.getElementById('root')!).render(
  <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductsProvider>,
)
