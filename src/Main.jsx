import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./Styles/Main.css"
import Home from "./Pages/Home.jsx"
import Layout from "./Pages/Layout.jsx"
import Projects from "./Pages/Projects.jsx"
import Experience from "./Pages/Experience.jsx"
import Services from './Pages/Services.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}/>
            <Route path="Projects" element={<Projects />}/>
            <Route path="Experience" element={<Experience/>}/>
            <Route path="Services" element={<Services/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)