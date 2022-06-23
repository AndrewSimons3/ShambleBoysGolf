import React from 'react'

const CartProduct = (props) => {
  return (
    <li>
      <h2>{props.name}</h2>
      <p>{props.amount}</p>
      <div>{props.size}</div>
    </li>
  )
}

export default CartProduct