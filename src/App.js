
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Assignment1 from './components/pages/Assignment1';
import Assignment2 from './components/pages/Assignment2';
import 'antd/dist/reset.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Assignment1 />} />
          <Route path="/assignment2" element={<Assignment2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
