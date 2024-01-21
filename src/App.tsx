import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './component/Head';
import Body from './component/Body';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Head />
        <Body />
      </header>
    </div>
  );
}

export default App;
