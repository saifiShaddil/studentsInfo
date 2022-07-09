import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContextOneProvider } from "./store/reducer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextOneProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextOneProvider>
  </React.StrictMode>
)
