import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Home from "./pages/home/Home";
import './common/i18n'
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import AboutMe from "./pages/aboutMe/AboutMe";
import { Analytics } from '@vercel/analytics/react';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about-me" element={<AboutMe/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </Router>
            <Analytics/>
        </>
    );
}

export default App;
