import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SideNav from './SideNav/SideNav';

import Home from '../../pages/Home/Home';
import Overview from '../../pages/Overview/Overview';
import TestPage from '../../pages/TestPage/TestPage';
import Login from '../../pages/Login/Login';

export default function App() {
  return (
    <div className="app">
      <Router>
        {window.location.pathname !== '/login' && <SideNav />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
