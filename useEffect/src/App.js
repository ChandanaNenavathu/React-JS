
import './App.css';
import Timer from './components/Timer';
import Compo from './components/Compo';
import Value from './components/Value';
import Title from './components/Title';
import Key from './components/Key';
import Seconds from './components/Seconds';
import GeoLocation from './components/GeoLocation';



function App() {
  
  return (
    <div className="App">
      <Timer/>
      <Compo/>
      <Value/>
      <Title/>
      <Key/>
      <Seconds/>
      <GeoLocation/>
    </div>
  );
}

export default App;
