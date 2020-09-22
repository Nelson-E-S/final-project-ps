import React from 'react';
import './App.css';

//for testing
import HomePage from './pages/HomePage';
import ReduxTest from './components/ReduxTest';
import SettingsForms from './components/SettingsForm';

function App() {
  return (
    <div className="App">
      <HomePage />
      <ReduxTest />
      <SettingsForms />
    </div>
  );
}

export default App;
