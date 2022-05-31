import React from 'react';
import './App.scss';

import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SideNav from './SideNav/SideNav';

import Home from '../../pages/Home/Home';
import Overview from '../../pages/Overview/Overview';
import TestPage from '../../pages/TestPage/TestPage';
import Login from '../../pages/Login/Login';
import CustomRouter from '../../custom/CustomRouter';
import CustomHistory from '../../custom/CustomHistory';

export default function App() {
  return (
    <div className="app">
      <CustomRouter history={CustomHistory}>
        {window.location.pathname !== '/login' && <SideNav />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </CustomRouter>

      <ToastContainer />
    </div>
  );
}
