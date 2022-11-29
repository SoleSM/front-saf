import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from '../views/home/Home';
import Catalogo from '../views/catalogo/catalogo'


export default function Rutas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Catalogo" element={<Catalogo />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

