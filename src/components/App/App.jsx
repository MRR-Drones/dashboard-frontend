import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Overview from '../../pages/Overview/Overview';
import SideNav from './SideNav/SideNav';

export default function App() {
  return (
    <div className="app">
      <Router>
        <SideNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </Router>
    </div>
  );
}
