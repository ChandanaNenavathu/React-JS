import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer/filterReducer";

const CartContext = createContext();

// const getLocalCartData = () => {
//     let LocalCartData = localStorage.getItem('ReactCart');
//     if (LocalCartData === []){
//         return []
//     // } else {
//     //     return JSON.parse(LocalCartData)
//     // }
// }
// }

const initialState = {
    cart: [], // array of items in the cart with their quantity and price
    // cart : getLocalCartData(),
    total_item : '',
    total_amount : '',
    shipping_fee : 50000,

};

const  CartProvider = ({ children }) => {

const [ state, dispatch] = useReducer(reducer, initialState)

const addToCart = (id, color, amount, product) => {
    dispatch ({ type: 'ADD_TO_CART', payload: { id, color, amount, product}})
};

const removeItem =(id) => {
    dispatch({type:'REMOVE_ITEM', payload : id})
};

// increment and decrement the product

const  setDecrease = (id) => {
    dispatch({type: 'SET_DECREMENT', payload:id})
}
const  setIncrease = (id) => {
    dispatch({type: 'SET_INCREMENT', payload:id})
}

// TO CLEAR CART
 const clearCart = () => {
    dispatch({ type: "CLEAR_CART", })
 }

// to add the data in localStorage

// get vs set

useEffect(() => {
    localStorage.setItem('ReactCart', JSON.stringify(state.cart))
},[state.cart])


    return ( 
        <CartContext.Provider value={ {...state, addToCart, removeItem, clearCart, setDecrease, setIncrease} }>
            {children}
        </CartContext.Provider>
    )
}
const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartContext}