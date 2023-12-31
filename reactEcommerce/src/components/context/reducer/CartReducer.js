const CartReducer = (state, action) => {
    if (action.type === 'ADD_TO_CART') {
      const { id, color, amount, product } = action.payload;
  
      // tackle existing product
      let existingProduct = state.cart.find((curItem) => curItem.id === id + color);
  
      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id + color) {
            let newAmount = curElem.amount + amount;

            if (newAmount >= curElem.max) {
                newAmount = curElem.max
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
  
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };
  
        return {
          ...state,
          cart: [...state.cart, cartProduct], // to avoid mutation of the original array
        };
      }
    } else if (action.type === 'REMOVE_ITEM') {
      let updatedCart = state.cart.filter((curElem) => curElem.id !== action.payload);
      return {
        ...state,
        cart: updatedCart,
      };
    } else if (action.type === 'CLEAR_CART') {
      return {
        ...state,
        cart: [],
      };
    }
    return state;
  };
  
  export default CartReducer;
  