import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Router } from '@reach/router';
import { Api } from './services/ApiService';

const runApi =async () => {
  Api.init();

  const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
  root.render(
  <React.StrictMode>
  
      <App />
    
  </React.StrictMode>
);

}

runApi();