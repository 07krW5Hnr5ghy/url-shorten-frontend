import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Shorten from "./pages/Shorten";
import Stats from "./pages/Stats";
import Update from "./pages/Update";
import { useState, useEffect } from "react";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="bg-white shadow-md p-4 rounded-lg flex gap-4 mb-6">
          <Link to="/" className="text-blue-500 font-semibold">Home</Link>
          <Link to="/shorten" className="text-blue-500 font-semibold">Shorten URL</Link>
          <Link to="/stats" className="text-blue-500 font-semibold">Check Stats</Link>
          <Link to="/update" className="text-blue-500 font-semibold">Update URL</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shorten" element={<Shorten />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
