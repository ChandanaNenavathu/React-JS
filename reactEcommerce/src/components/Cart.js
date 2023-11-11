import React from 'react'
import { useCartContext } from './context/CartContext'
import CartItem from './CartItem'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  const {cart, clearCart, } = useCartContext()
  console.log('cart ==>', cart)

  // if(cart.length === 0){
  //   return 
  //   <EmptyDiv>
  //     <h3>No Cart in Item</h3>
  //   </EmptyDiv>
  // }
  
  return ( 
    <div>
      <div className="container">
        <div className="cart-item">
          <div className="cart_heading">
            <p>Item</p>
            <p className="cart-hide">Price</p>
            <p> Quantity</p>
            <p className="cart-hide">SubTotal</p>
            <p>Remove</p>
          </div>
        </div>
        <div className="cart-item">
          {
            cart.map((curElem) => {
              return <CartItem key = {curElem.id} {...curElem}/>
            })
          }
        </div>
         <div className="cart-two-button">
          <NavLink to='products'>
            <button> Continue Shopping</button>
          </NavLink>
          <button onClick={clearCart}>Clear Cart</button>
         </div>
      </div>
    </div>
  )
}

export default Cart
