import './App.css';
import React, { useState } from 'react';

function App() {
  const [results, setResults] = useState(0);
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAdd = () => {
    setResults(results + parseInt(input));
    setInput('');
  };
  const handleSubtract = () => {
    setResults(results - parseInt(input));
    setInput('');
  };
  const handleMultiply = () => {
    setResults(results * parseInt(input));
    setInput('');
  };
  const handleDivide = () => {
    setResults(results / parseInt(input));
    setInput('');
  };
  const handleClear = () => {
    setInput("");
    setResults(0);

  }
  return (
    <div className="App">
        <h1> CALCULATOR APP</h1>
        <div className="calculator">
          <div className='input-container'>
            <input type="number" value={input} onChange={handleInputChange}/>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSubtract}>-</button>
            <button onClick={handleMultiply}>*</button>
            <button onClick={handleDivide}>/</button>
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>
        <h2>Results : {results}</h2>
    </div>
  );
}

export default App;
