import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactPage from './Pages/ContactPage';

import About from './Pages/AboutPage';
import FeedbackPage from './Pages/FeedbackPage';
import HomePage from './Pages/HomePage';
import SEOPage from './Pages/SEOPage';
import WebDevPage from './Pages/WebDevPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/feedback' element={<FeedbackPage/>}/>
        <Route path='/services/seo' element={<SEOPage/>}/>
        <Route path='/services/webdev' element={<WebDevPage/>}/>

      </Routes>
    </Router>
  );
}

export default App;
