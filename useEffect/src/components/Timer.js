import React, { useState, useEffect} from 'react'

const Timer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
          .then(response => response.json())
          .then(json => setData(json));
      },[]);
  return (
    <div>
        <ul>
        {data.map(item => (
            <li key={item.id}>{item.title}</li>
        ))}
        </ul>
    </div>
  )
}

export default Timer
