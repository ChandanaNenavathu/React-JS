import React, { useState, useEffect } from 'react'

const Value = ({propValue}) => {
    const [stateValue, setStateValue] = useState(propValue)
    useEffect(() => {
        console.log('Array of Dependencies');
      }, [propValue, stateValue]);
  return (
    <div>
      <p>Prop value: {propValue}</p>
      <p>State value: {stateValue}</p>
      <button onClick={() => setStateValue(stateValue + 1)}>Increment</button>
    </div>
  )
}

export default Value
