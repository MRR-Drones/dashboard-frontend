import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

import './styles/_reset.scss';
import './styles/main.scss';
import './styles/fonts.scss';
import './styles/colors.scss';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
