import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './Styles/index.scss';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TransalteProvider } from './hoc/TranslateProvider';

ReactDOM.render(
  <BrowserRouter>
  <TransalteProvider>
  <App />
  </TransalteProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
