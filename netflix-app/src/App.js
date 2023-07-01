import React from 'react';
import './App.css';
import Card from './components/Card';
import Data from './components/CardObj.json';

function App() {

  return (
    <>
    <h1 className='headingStyle'> List of Top Netflix Series</h1>
    <div className="cardContainer">
      
      {Data.map((item, index) => {
        return (
          <Card 
            key = {index}
            sname = {item.sname}
            imgsrc = {item.imgsrc}
            title = {item.title}
            links = {item.links}
          />
        )
      })}
    </div>
    </>
  );
}

export default App;