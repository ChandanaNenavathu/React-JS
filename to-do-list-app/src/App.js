import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [activity, setActivity] = useState('');
  const [list, SetList] = useState([]);
  const change = (e) => {
    setActivity(e.target.value);
  }
  const click = () => {
    SetList((list) => {
      const updatedList = [...list, activity];
      console.log(updatedList);
      setActivity('');
      return updatedList;
    })

  }
  const removeList = (index) => {
    const updatedListData = list.filter((item, i) => {
      return i !== index;
    })
    SetList(updatedListData);
    console.log("setlist", SetList)
  }
  const removeAll = () => {
    SetList([])
  }
  return (
    <>
      <div className='container'>
        <div className='header'>Todo List</div>
        <input type="text" placeholder='Enter Your Text' value={activity} onChange={change}/>
        <button onClick={click}>Add</button>
          <p className='listHeading'>Here is List Items </p>
          {list!==[] && list.map((item, index) => {
            return (
              <>
              <div key={index}>
                <p> 
                  <div className='listData'>{item}</div>  
                  <div>
                    <button className='btnPosition' onClick={() => removeList(index)}>Remove</button>
                  </div>
                </p>
              </div>
              </>
          )
          })}
          {list.length>=1 && <button onClick={removeAll}>Remove All</button>}
          
      </div>
    </>
  )
}

export default App
