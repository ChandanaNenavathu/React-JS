import React from 'react'
import Greetings from './components/Greetings'

const App = () => {
  const Name = "Hello, world!"
  let currDate = new Date();
  currDate = currDate.getHours();
  const cssStyle = {}
  let greet = " ";

 if (currDate >1 && currDate < 12) {
        greet = "Good Morning";
        cssStyle.color = "green";
        cssStyle.textAlign = "center";
  }
  else if(currDate >12 && currDate < 18) {
    greet = "Good Afternoon";
    cssStyle.color = "yellow";
    cssStyle.textAlign = "center";
  }
  else if(currDate >18 && currDate < 24) {
    greet = "Good Evening";
    cssStyle.color = "blue";
    cssStyle.textAlign = "center";
  }
  return (
    <>
      <div>
        <Greetings Name = {Name} greet = {greet} cssStyle = {cssStyle.color}/>
      </div>
    </>
  )
}

export default App

