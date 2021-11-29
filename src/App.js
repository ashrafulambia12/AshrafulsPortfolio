import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from './components/Home/Home';
import About from './components/About/About';
import Navigation from "./Navigation/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
