import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({ firstName : '', lastName : '' });
const handleFirstName = (event) => {
  setFormData({...formData, firstName : event.target.value });
};
const handleLastName = (event) => {
  setFormData ({...formData, lastName : event.target.value });
}
const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData);
}
  return (
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          FirstName:
          <input type="text" value={formData.firstName} onChange={handleFirstName}/>
        </label>
        <label>
          LastName:
          <input type="text" value={formData.LastName} onChange={handleLastName}/>
        </label>
        <button type='submit'>Submit</button>
      </form>
      
  )
}

export default Form
