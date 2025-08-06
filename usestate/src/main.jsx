import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './BrandList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
