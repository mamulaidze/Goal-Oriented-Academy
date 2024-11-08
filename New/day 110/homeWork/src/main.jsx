import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Button from './components/button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button>black button</Button>
    <Button variant='secondary'>secondary </Button>
  </StrictMode>,
)
