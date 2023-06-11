import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css'
import { Redirect, Router } from '@reach/router';
import { GetStartedPage } from './components/GetStartedPage';
import { PeopleList } from './components/PeopleList';
import { Search } from './components/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <GetStartedPage path="/" />
          <PeopleList path="/people" />
          <Search path="/search" />
      </Router>
    </div>
  );
}

export default App;
