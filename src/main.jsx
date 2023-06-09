import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { UserAuthContextProvider } from './Common/UserAuthContext'
// 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
        <UserAuthContextProvider>
          <App />
        </UserAuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
