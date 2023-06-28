import './App.css';
import React, { useState } from 'react';

function App() {
  const [select, setSelect] = useState(false);

  const clickHandle = () => {
    setSelect(!select);
  }

  return (
    <div className="App">
      <span className="spanClass" onClick={clickHandle}>Select Location</span>
        { select &&
          <div className="container">
          <span className='option'>Hyderabad</span>
          <span className='option'>Banglore</span>
          <span className='option'>Mumbai</span>
          <span className='option'>Chennai</span>
          <span className='option'>Kolkata</span>
        </div>}
    </div>
  );
}

export default App;
