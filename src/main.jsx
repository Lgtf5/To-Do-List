import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './list/toDoList.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
