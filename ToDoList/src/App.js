import React, { useState } from 'react'
import './App.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText)=> {
    setListTodo([...listTodo,inputText])
  }
  const deleteListItem = (index)=> {
    let newwListTodo = [...listTodo];
    newwListTodo.splice(index,1)
    setListTodo(newwListTodo)
  }
  return (
    <div className="App">
      <div className="main-container">
        <div className="center-container">
          <TodoInput addList={addList}/>
          <h1 className='app-heading'>TODO</h1>
          <hr />
          {listTodo.map((listItem,i ) => {
            return (
              <TodoList key={i} index={i}  item={listItem} deleteItem={deleteListItem}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
