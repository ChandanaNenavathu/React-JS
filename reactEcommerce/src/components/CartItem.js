import React from 'react'
import FormatPrice from './Helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from './context/CartContext'

const CartItem = ({id, name, image, color, price, amount,}) => {
    const { removeItem } = useCartContext();
    const setDecrease = () => {
        // amount >  1 ? setAmount(amount -1 ) : setAmount(1) ;
    }

    const setIncrease = () => {
        // amount < stock ? setAmount(amount + 1) : setAmount(stock) ;
    };
    console.log('id =>', id)
  return (
    <div className='cart_heading'>
        <div className="cart-image--name">
        <div>
            <figure>
                <img src={image} alt={id} />
            </figure>
        </div>
        <p>{name}</p>
        <div className="color-div">
            <p>Color:</p>
            <div className="color-style" style={{backgroundColor: color, color : color}}>

            </div>
        </div>
        </div>
            {/* price */}
        <div className="cart-hide">
            <p> 
                <FormatPrice price= {price} />
            </p>
             {/* { quantity}  */}
             <CartAmountToggle 
            amount = { amount }
            setDecrease={ setDecrease }
            setIncrease={ setIncrease } 
        />
            {/* SubTotal */}
            <div className="cart-hide">
                <p>< FormatPrice price={price + amount}/>  </p>
            </div>
            <div>
                < FaTrash className='remove_icon' onClick={() => removeItem(id)}/>
            </div>

      </div>
    </div>
  )
}

export default CartItem
