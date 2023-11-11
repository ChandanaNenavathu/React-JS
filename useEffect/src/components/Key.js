import React, { useState, useEffect} from 'react'

const Key = () => {
    const [count, setCount] = useState(0);
    useEffect(() =>{
        function handleKeyPress(e) {
            if(e.key === 'ArrowUp') {
                setCount(count + 1);
            }
        }
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [count]);



  return (
    <div>
        <p>Press the up arrow to increment the count</p>
        <p>Count: {count}</p>
    </div>
  )
}

export default Key
