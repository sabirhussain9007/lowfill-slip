import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SnackbarProvider } from 'notistack'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <SnackbarProvider >
  <StrictMode>
    <App />
  </StrictMode>,
  </SnackbarProvider>
)
