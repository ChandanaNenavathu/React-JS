//import logo from './logo.svg';
import './App.css';
import Modal from './component/Modal';
import { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='App'>
      <h1>Hey, Click on the button to open the Modal</h1>
      <button className='openModalBtn my-3'
        onClick={() => {setOpenModal(true)}}>Open</button>
      {openModal && <Modal closeModal={setOpenModal}/>} 
    </div>
  )
}

export default App;
