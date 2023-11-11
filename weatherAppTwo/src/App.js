import React,{ useState } from 'react'
function App() {
  const[city, setCity] = useState("");
  const[result,setResult] = useState("")
  const changeHandler = e => {
    setCity( e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7fb5796a5381c7b18f5801e8e8ceb250`).then(   
       response => response.json()
    ).then(data => {
      const kelvin =data.main.temp;
      const celsius = kelvin-273.15
      setResult("Temperature at"+" "+city+"\n " +Math.round(celsius)+ "°C");
    })
  }
  return (
    <div>
      <center />
      <div className="card">
        <div className="card-body">
          <h4 className="card-Weather App">Weather App</h4>
          <form onSubmit = {submitHandler}>
            <input type="text" name="city" value={city} onChange={changeHandler}/> <br></br>
            <input type="submit" value="Get Temp"/>
          </form>
          <h1>{result}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
