import React, { useState, useEffect } from 'react'

function Seconds() {
    const[second, setSecond] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setSecond(second => second + 1)    
        }, 1000);
        return () => clearInterval(interval);
    }, [])
  return (
    <div>
      {second} seconds have Passed
    </div>
  )
}

export default Seconds