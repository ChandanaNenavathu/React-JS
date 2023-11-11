import React, { useState, useEffect} from 'react'

const Compo = () => {
    const[count, setCount] = useState(0)
    useEffect(() => {
        console.log("Effect ran")
    })
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Compo
