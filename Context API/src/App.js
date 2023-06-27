import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NoteState from './context/NoteState';

function App() {
  return (
    <div>
      <NoteState>
          <Navbar/>
      </NoteState>
     
    </div>
      
  )
}

export default App;
