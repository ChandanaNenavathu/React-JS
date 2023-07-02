// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import TextForm from './component/TextForm';

// for more dark mode enable watch code with haryy react playlist

function App() {
  const[mode, setMode] = useState("light"); // whether or not the app is in dark mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      } else {
      setMode('light');
    }
    };
    useEffect(() => {
    document.body.className = mode;
    }, [mode]);
  return (
      <div className="container" >
        {/* <div className={`form-check form-switch text App ${mode}`}>
            <input className="form-check-input" onClick={toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div> */}
        <TextForm  heading = "Enter The Text to analyze below" mode={mode} toggleMode={toggleMode}/>
      </div>
  );
}

export default App;
