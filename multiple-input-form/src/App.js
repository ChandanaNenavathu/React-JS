
import './App.css';
import { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState( {
    fName : "",
    lName : "",
    email : "",
    phone : "",
    quali : ""
  });

  const onSubmit = (event) => {
    event.preventDefault();
    alert(`Hello FORM SUBMITTED`);
  }
  const inputEvent = (event) => {
    // console.log(event.target.value);

    const { value, name } = event.target;

    setFullName((prevValue) => {
       console.log(prevValue);

       return {
        ...prevValue,
        [name] : value,
       }

      // if(name === "fName") {
      //   return {
      //     fName : value ,
      //     lName : prevValue.lName,
      //     email : prevValue.email,
      //     phone : prevValue.phone
      //   }
      // }else if(name === "lName") {
      //   return {
      //     fName : prevValue.fName,
      //     lName : value,
      //     email :prevValue.email,
      //     phone : prevValue.phone
      //   }
      // }else if(name === "email") {
      //   return {
      //     fName : prevValue.fName,
      //     lName : prevValue.lName,
      //     email : value,
      //     phone : prevValue.phone
      //   }
      // }else if(name === "phone") {
      //   return {
      //     fName : prevValue.fName,
      //     lName : prevValue.lName,
      //     email :prevValue.email,
      //     phone : value
      //   }
      // };
    });
  }
    return (
      <div className="App">
        <h1>HELLO {fullName.fName} {fullName.lName}</h1>
        <h3>{fullName.email}</h3>
        <h3>{fullName.phone}</h3>
        <h3>{fullName.quali}</h3>
        <form onSubmit={onSubmit}>
        <div>
          <input type="text" placeholder='Enter your First Name' size="50" onChange={inputEvent} name = 'fName' value = {fullName.fName} autoComplete= "off"/>
        </div>
        <div>
          <input type="text" placeholder='Enter your Last Name'size="50" onChange={inputEvent} name = 'lName' value={fullName.lName} autoComplete= "off"/>
        </div>
        <div>
          <input type="email" placeholder='Enter your Email'size="50" onChange={inputEvent} name = 'email' value={fullName.email} autoComplete= "off"/>
        </div>
        <div>
          <input type="number" placeholder='Enter your Mobile Number'size="50" onChange={inputEvent}name = 'phone' value={fullName.phone} autoComplete= "off"/>
        </div>
        <div>
          <input type="text" placeholder='Enter your Qualification 'size="50" onChange={inputEvent}name = 'quali' value={fullName.quali} autoComplete= "off"/>
        </div>
        <div>
          <input type="Submit" />
        </div>
        </form>
      </div>
    );
}

export default App;
