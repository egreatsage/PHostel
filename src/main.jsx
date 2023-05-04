import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import * as te from 'tw-elements';
import { ThemeProvider } from "@material-tailwind/react";
import { UserAuthContextProvider } from './Common/UserAuthContext'
// 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <AlertProvider template={AlertTemplate} >
     <UserAuthContextProvider>
     <App />
     </UserAuthContextProvider>
     </AlertProvider>

    </ThemeProvider>
  </React.StrictMode>,
)
