import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Counter</h1>
        <p>{counter}</p>
        <div style={{display: 'flex', gap: 10}}>
          <button onClick={() => setCounter(prevState => prevState + 1)}>Increment</button>
          <button onClick={() => setCounter(prevState => prevState - 1)}>Decrement</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
