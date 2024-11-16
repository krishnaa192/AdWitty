import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactPage from './Pages/ContactPage';

import About from './Pages/AboutPage';
import FeedbackPage from './Pages/FeedbackPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/feedback' element={<FeedbackPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
