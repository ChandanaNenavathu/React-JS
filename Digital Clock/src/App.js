import React, { useState, useEffect } from 'react';

function App() {
  let time = new Date().toLocaleTimeString();
   const [currentTime, setCurrentTime] = useState(time);

// to update setCurrentTime with setInterval using useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
  },1000);
  return () => clearInterval(timer);
},);

  return (
    <>
      <div className="App">
          <h1>{currentTime}</h1>
      </div>
    </>
    
  );
}

export default App;
