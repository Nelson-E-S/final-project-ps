import React from 'react';
import './App.css';

//for testing
//import ReduxTest from './components/ReduxTest';
//import AnimalCard from './components/AnimalCard';
import AnimalAccordion from './components/AnimalAccordion';

function App() {
  return (
    <div className="App">
      <AnimalAccordion animal='cat' numOfCards='3' />
      <AnimalAccordion animal='dog' numOfCards='3' />
      <AnimalAccordion animal='panda' numOfCards='3' />
    </div>
  );
}

export default App;
