import React from 'react';
import './App.scss';

import Home from '../../pages/Home';

import Route from '../../core/Route';

export default function App() {
  return (
    <div className="app">
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
}
