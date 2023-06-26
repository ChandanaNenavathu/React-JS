import { useState } from 'react';
import Alert from './Alert';
import './App.css';

function App() {
  const[alertMessage, setAlertMessage] = useState(false);
  
  return (
    <>

  <button onClick={() => setAlertMessage(true)}>Alert</button>
  {alertMessage && <Alert closeAlert={setAlertMessage}/>}
    </>
  );
}

export default App;
