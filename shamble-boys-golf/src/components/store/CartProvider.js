import React, {useReducer} from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  products: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedProducts = state.products.concat(action.product);
    const updatedTotalAmount = state.totalAmount + action.product.price * action.product.amount;
    return {
      products: updatedProducts,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
}

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


  const addProductToCartHandler = (product) => { 
    dispatchCartAction({type: 'ADD', product: product})
  }
  const removeProductFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id})
  }


  const cartContext = {
    products: cartState.products,
    totalAmount: cartState.totalAmount,
    addProduct: addProductToCartHandler,
    removeProduct: removeProductFromCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;