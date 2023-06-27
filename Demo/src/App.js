import { useState, React } from 'react';
import './App.css';
import Support from './Components.js/Support';

function App() {
  const [ count, SetCount] = useState(0);
  const PlusClick = () => {
    SetCount(count + 1)
  }
  const MinusClick = () => {
    SetCount(count - 1 )
  }
  return (
    <div className="App">
      <div>
        <button onClick={PlusClick}>Plus</button>
        <h1>{count}</h1>
        <button onClick={MinusClick}>Minus</button>
      </div>
      <>
        <Support title = 'Properties'/>
        <Support title = 'Practice'/>
        <Support title = 'React'/>
      </>
    </div>
  );
}

export default App;
