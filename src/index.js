import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';

import App from './components/app';
import Store from './components/store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={Store}><App /></Provider>);




