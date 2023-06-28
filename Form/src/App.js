
import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  function inputEvent(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }
  function onSubmit(event){
    event.preventDefault()
    setFullName(name);
  }
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div>
        <h1>Hello {fullName}</h1>
        <input type="text" 
          placeholder='Enter your Name' 
          value={name}
          onChange={inputEvent}
        />
        <input type="password"
        placeholder='Enter your password' />
        <button>Submit</button>
        </div>
      </form>
      
    </div>
  );
}

export default App;
