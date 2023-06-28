import './App.css';
import React from 'react';

function App() {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  return (
    <div className="App">
      <h1>Chandana</h1>
      <h2>Current Date :{currentDate}</h2>
      <h2>Current Time :{currentTime}</h2>
      <img src="https://www.unigreet.com/wp-content/uploads/2022/11/100-very-special-good-morning-images-quotes-photos.jpg" alt="" />
    </div>
  );
}

export default App;
