import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/home/Home";
import './common/i18n'
import Projects from "./pages/projects/Projects";

function App() {
    return (
      <Router>
        <Routes>
          <Route path="" element={ <Home />} />
          <Route path="/projects" element={ <Projects />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
  );
}

export default App;
