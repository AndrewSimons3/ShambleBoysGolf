import React from 'react';
import classes from './CartProduct.module.css';

const CartProduct = (props) => {
  return (
    <li className={classes['cart-product']}>
      <div>
        <img src={props.image} alt="golf shirts" />
      </div>
      <div className={classes.info}>
        <h3>{props.name}</h3>
        <p>{props.size}</p>
        <span className={classes.amount}>{props.amount}</span>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
        <span className={classes.price}>{props.price}</span>
      </div>
    </li>
  )
}

export default CartProduct