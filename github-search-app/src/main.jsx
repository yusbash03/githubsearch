import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router } from 'react-router-dom'
//import { Router} from 'react-router-dom'
import { SearchProvider } from './context/SearchContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <SearchProvider>
   <App />
    </SearchProvider>
    </Router>
</React.StrictMode>
  // <React.StrictMode>
  //   <BrowserRouter>
  //   <App />
  //   </BrowserRouter>
  // </React.StrictMode>,
)
