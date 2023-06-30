import './App.css';

let name = "Chandana";
let app = "My First React App";
function App() {
  return (
    <>
    <h1>JSX</h1>
    <div className="App">
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora debitis ad itaque neque nobis similique ipsa suscipit cum tenetur velit corporis harum cumque illum, aliquam eos quia quas amet. Nesciunt inventore ullam error unde libero, sit eum esse, enim rem corrupti porro beatae eos distinctio, ut voluptates aliquid quis mollitia.</p>
        <h2 className='CreateName'>Create React App</h2>
        <h3>{app}</h3>
        <h2>{name}</h2>
    </nav>
    </div>
    </>
  );
}

export default App;
