import React from 'react';
import HomePage from './components/HomePage';
import Music from './data/Music';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style/App.css';


function App() {
  return (
    <div className="App">
      <HomePage songs={Music} />
    </div>
  );
}

export default App;
