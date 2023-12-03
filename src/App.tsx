import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/home/Home";
import './common/i18n'

function App() {
    return (
      <Router>
        <Routes>
          <Route path="" element={ <Home />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
  );
}

export default App;
