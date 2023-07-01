//import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <Navbar
        title = "Props"
        aboutProp = "About Prop"
        name = "Nenavath chandana" 
        age = "24"
        sample = "Props Basic Example"
      />
    </>
  );
}

export default App;
