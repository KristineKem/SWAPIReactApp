import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css'
import { Redirect } from '@reach/router';
import { GetStartedPage } from './components/GetStartedPage';
import { PeopleList } from './components/PeopleList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GetStartedPage />} />
        <Route path="/people" element={<PeopleList />} />
      </Routes>
    </div>
  );
}

export default App;
