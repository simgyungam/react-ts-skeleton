import React from 'react';
import Logo from '../logo.svg';
import Hello from '../components/Hello';
import './style.scss';

function App(): JSX.Element {
  return (
    <div>
      <header className="App-header">
        <img src={Logo} alt="" width="100" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Hello />
      </header>
    </div>
  );
}

export default App;
