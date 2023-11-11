import React, { useState, useMemo } from 'react';
import './App.css';

function App() {
   const [countOne, setCountOne] = useState(0);
   const [countTwo, setCountTwo] = useState(100);

  const increment = () => {
    setCountOne(countOne + 1);
  }
  const decrement = () => {
    setCountTwo(countTwo - 1);
  }
  const isEven = useMemo(() => {
    console.log(".....................")
    let i = 0 ;
    while(i < 2000000) i++;
    return countOne%2===0;
  }, [countOne]);
  
  return (
    <div className="App">
      <h1>Use Memo Example</h1>
      <br />
      <h2>{isEven?"Even" :"Odd"}</h2>
      <h2>{countOne}</h2>
      <button onClick={increment}>Adding</button>
      <h2>{countTwo}</h2>
      <button onClick={decrement}>Substracting</button>
    </div>
  );
}

export default App;
