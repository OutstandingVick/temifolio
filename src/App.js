import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Pow from './Pow';

function App() {
  return (
    <Router>
      <div className='bg-oxford overflow-hidden'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/pow' element={<Pow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
