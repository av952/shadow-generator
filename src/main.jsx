import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Contexto from './utils/Contexto'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contexto>
    <App />
    </Contexto>
  </React.StrictMode>
)
