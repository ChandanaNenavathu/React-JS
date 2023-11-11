
import './App.css';
import About from './component/About';
import State from './component/State';
import Form from './component/Form';
import ToDoList from './component/ToDoList';
import AsyncData from './component/AsyncData';


function App() {
  return (
    <div className="App">
      <About/>
      <State/>
      <Form/>
      <ToDoList/>
      <AsyncData/>
    </div>
  );
}

export default App;
