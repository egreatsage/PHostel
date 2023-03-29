import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import * as te from 'tw-elements';
import { ThemeProvider } from "@material-tailwind/react";
import { UserAuthContextProvider } from './Common/UserAuthContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
     <BrowserRouter>
     <UserAuthContextProvider>
     <App />
     </UserAuthContextProvider>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
