import React, { useState } from 'react'

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [isOn, setIsOn] = useState(false);
    const [user, setUser] = useState({
      name : 'john Doe',
      age : 30,
      email : 'envkt@example.com'
    });
    const [seconds, setSeconds] = useState(0);

    const addTodo = () => {
        setTodos([...todos, {text: "New Todo", completed: false}]);
    }
    const toggle = () => {
      setIsOn(!isOn);
    };
    const updateEmail = () => {
      setUser({ ...user, email: 'newemail@example.com' });
    };
    const startTimer = () => {
      const interValid = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 2000);
      return () => clearInterval(interValid);
    };
  return (
    <div>
        <br />
        <br />
      <button onClick={addTodo}>ADD TODO</button>

      <ul>
        {todos.map((todos, index) => <li key={index}>{todos.text}</li>)}

      </ul>
      <button onClick={toggle}>{isOn ? "On" : "Off"}</button>
      <br />
      <br />
      <p>Name : {user.name}</p>
      <p>Name : {user.age}</p>
      <p>Name : {user.email}</p>
      <button onClick={updateEmail}>Update Email</button>
      <br />
      <br />
      <p>Seconds: {seconds}</p>
      <button onClick={startTimer}>Start Timer</button>
    </div>
  )
}

export default ToDoList

