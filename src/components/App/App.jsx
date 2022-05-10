import React from 'react';
import './App.scss';

import Home from '../../pages/Home/Home';
import Overview from '../../pages/Overview/Overview';
import TestPage from '../../pages/TestPage/TestPage';

import Route from '../../core/Route';

export default function App() {
  return (
    <div className="app">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/overview">
        <Overview />
      </Route>
      <Route path="/testpage">
        <TestPage />
      </Route>
    </div>
  );
}
