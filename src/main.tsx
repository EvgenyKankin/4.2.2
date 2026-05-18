import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import './reset.css'

createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <App />
  </MantineProvider>,
)
