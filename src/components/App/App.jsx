import React from 'react';
import './App.scss';

import Home from '../../pages/Home';

import Route from '../../core/Route';

const App = () => (
  <div className="app">
    <Route path="/">
      <Home />
    </Route>
  </div>
);

export default App;
