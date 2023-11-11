import { useState} from 'react'
import { FaCheck } from "react-icons/fa"
import CartAmountToggle from './CartAmountToggle'
import { NavLink } from 'react-router-dom'
import { useCartContext } from './context/CartContext'


const AddToCart = ( { product } ) => {
    const { addToCart } = useCartContext()
    console.log("PRODUCT", product)

    const { id, colors, stock } = product;
    
    const [ color, setColor ] = useState(product.colors[0]);
    const [ amount, setAmount ] = useState(1);

    const setDecrease = () => {
        amount >  1 ? setAmount(amount -1 ) : setAmount(1) ;
    }

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock) ;
    };

  return (
    <div>
        { colors && ( 
            <div className="colors">
                <p>
                    Colors:
                    { colors.map((curColor, index) => {
                        return (
                            <button key={index} style={{ backgroundColor: curColor}}
                                className= { colors === curColor ? "btnStyle active" : "btnStyle"}
                                onClick={() => setColor(curColor)}
                            >
                                { color === curColor ? <FaCheck /> : null }
                            </button>

                        );
                    })}
                </p>
            </div>
        )}

        {/* Add to Cart */}

        <CartAmountToggle 
            amount = { amount }
            setDecrease={() => setDecrease(id) }
            setIncrease={() => setIncrease(id) } 
        />
        <NavLink to="/cart"
            onClick={() => addToCart(id, color, amount, product) }>
            <button className='btn'>
                Add to Cart
            </button>
        </NavLink>
    </div>
  )
}

export default AddToCart
