import './App.css';
import Card from './components/card/Card.js';
import message from './components/card/CardObj.json'

function App() {
  
  return (
    <div className='App'>
      
      {message.map((item, index) => {
        return (
          <Card
            key = {index}
            id = {item.id}
            title = {item.title}
            url = {item.url}
            thumbnailUrl = {item.thumbnailUrl}
          />
        )
      })}
      {/* 
      <Card id = {message[0].id} title = {message[0].title} />
      <Card id = {message[1].id} title = {message[1].title} />
      <Card id = {message[2].id} title = {message[2].title} /> */}
      
    </div>
  );
}

export default App;
