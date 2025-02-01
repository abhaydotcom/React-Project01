import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Nav/>
   <Hero/>
  </StrictMode>,
)
