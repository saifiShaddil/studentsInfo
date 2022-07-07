import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContextOneProvider, initialState, reducer } from "./store/reducer";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextOneProvider>
      <App />
    </ContextOneProvider>
  </React.StrictMode>
)
