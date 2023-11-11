import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import SingleProducts from './components/SingleProducts'
import Cart from './components/Cart'
import Header from './components/Header';
import Error from './components/Error';

import "./App.css";

const App = () => {

  return ( 
   <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/singleproduct/:id' element={<SingleProducts />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<Error />} />

    </Routes>
   </Router> 
    )
}

export default App
