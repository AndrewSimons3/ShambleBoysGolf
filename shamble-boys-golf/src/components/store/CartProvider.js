import React from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  

  const addProductToCartHandler = () => { }
  const removeProductFromCartHandler = () => {}


  const cartContext = {
    products: [],
    totalAmount: 0,
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