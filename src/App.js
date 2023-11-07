import React from 'react';
import HomePage from './components/HomePage';
import zambianSongs from './data/zambianSongs';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style/App.css';

function App() {
  return (
    <div className="App">
      <HomePage songs={zambianSongs} />
    </div>
  );
}

export default App;
