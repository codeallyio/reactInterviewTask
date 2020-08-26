import React from 'react';
import logo from './strove.jpg';
import './App.css';
import Task from './components/Task/Task'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://strove.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Strove
        </a>
      </header>
      <Task />
    </div>
  );
}

export default App;
