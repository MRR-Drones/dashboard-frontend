import React from 'react';
import './App.scss';

import Home from '../../pages/Home/Home';
import Overview from '../../pages/Overview/Overview';

import Route from '../../core/Route';

export default function App() {
  return (
    // <BrowserRouter>
    <div className="app">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/overview">
        <Overview />
      </Route>
    </div>
    // </BrowserRouter>
  );
}
