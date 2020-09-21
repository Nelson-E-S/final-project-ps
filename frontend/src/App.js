import React from 'react';
import './App.css';

//for testing
import ReduxTest from './components/ReduxTest';
import AnimalCard from './components/AnimalCard';

function App() {
  return (
    <div className="App">
      <ReduxTest />
      <AnimalCard animal='Cat' />
    </div>
  );
}

export default App;
