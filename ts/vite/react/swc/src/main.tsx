import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// oxide:top-imports

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* oxide:providers-start */}
    <App />
    {/* oxide:providers-end */}
  </StrictMode>,
)
