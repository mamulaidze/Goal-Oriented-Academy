import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Example from './components/DropDown'
import PopoverExample from './components/Popover'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Example/>
    <PopoverExample />
  </StrictMode>,
)
