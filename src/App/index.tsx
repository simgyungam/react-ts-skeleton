import React from 'react';
import Logo from '../../public/logo192.png';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React 2345
        </a>
      </header>
    </div>
  );
}

export default App;
