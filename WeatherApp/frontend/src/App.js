import logo from './logo.svg';
import './App.css';
import React from 'react'
import Weather from './Weather.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Weather temp = "0"/>
      </header>
    </div>
  );
}

export default App;
