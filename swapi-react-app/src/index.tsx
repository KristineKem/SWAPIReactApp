import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Api } from './services/ApiService';
import { BrowserRouter } from 'react-router-dom';

const runApi =async () => {
  Api.init();

  const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
  root.render(
  <BrowserRouter>
  
      <App />
    
  </BrowserRouter>
);

}

runApi();