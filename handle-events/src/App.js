import './App.css';
import React, { useState } from 'react';

function App() {
  const purple = "#8e44ad"
  const yellow = "#ffc107"
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("Click Me");
  const [update, setUpdate] = useState(yellow);
  
    function bgChange() {
      console.log("clicked");
      let newBg = "#34495e"
      setBg(newBg);
      setName("WOW");
  }
  function BgBackGr(){
    console.log("Got It")
    let newClr = "#ffd700"
    setUpdate(newClr);
    setName("Back");
  }
  return (
    <div style = {{ backgroundColor : bg, color : update }}>
      <button onClick={bgChange}  onDoubleClick={BgBackGr} > {name}</button>
    </div>
  );
}

export default App;
