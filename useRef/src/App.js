import { useState, useReducer } from 'react';
import './App.css';

// this is use State

// function App() {
//   const [count, setCount] = useState(10);
//   const incHandler = () => setCount(count + 10)
//   const decHandler = () => setCount(count - 10)
//   return (
//     <div className="App">
//       <h2>This is useState</h2>
//       <h1>Display {count}</h1>
//       <button onClick={incHandler}>Increase</button>
//       <button onClick={decHandler}>Decrease</button>
//     </div>
//   );
// }

// export default App;

// same useState using useReducer method

const product = (state, action) => {
  switch (action.type){
    case 'increase':
      return {...state, count : state.count + 10};
    case 'decrease':
      return {...state, count :state.count - 10};
    case "inputMessage":
      return {...state, message : action.payload};
      default:
        throw new Error();
  }
};

const App = () => {
  const[state, dispatch] = useReducer(product, {count :10, message : ''});
  
  const increment = () => {
    dispatch({type: 'increase'})
  }
  const decrement = () => {
    dispatch({type: 'decrease'})
  };
  const changeHandler = (event) => {
    dispatch({type:'inputMessage', payload : event.target.value})
  }
  return (
    <div className='App'>
      <h1>Display {state.count}</h1>
      <button onClick={increment}>ADDITION</button>
      <button onClick={decrement}>SUBSTRACTION</button>
      <h1>{state.message}</h1>
      <input type="text" placeholder='type here.......' onChange={changeHandler} />
    </div>
  )
}

export default App
