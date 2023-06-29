import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(100);
  const incNum = () => setCount(count + 20);
  const decNum = () => setCount(count - 20 && count > 0? count - 20 : 0);
  return (
    <div className="mainDiv">
    <div className="centerDiv">
      <h1> {count} </h1>
      <div className="btnDiv">
        <button onClick={incNum}>  Increment </button>
        <button onClick={decNum}>  Decrement </button>
      </div>
    </div>
    </div>
  );
}

export default App;
