import React from 'react';
import classes from './ProductItem.module.css';
import Card from '../UI/Card';
import { useContext } from 'react';
import CartContext from '../store/cart-context';

const ProductItem = (props) => {
	const cartCtx = useContext(CartContext);
	const price = `$${props.price.toFixed(2)}`;

	const addProductToCartHandler = () => {
		cartCtx.addProduct({
			id: props.id,
			name: props.name,
			amount: 1,
      price: price,
      image: props.image
		});
	};

	return (
		<Card className={classes.card}>
			<div className={classes['product-wrapper']}>
        <li className={classes['info-container']}>
          <h3>{props.name}</h3>
					<img src={props.image} alt="golf shirts"/>
					<span>{props.price}</span>
					<button className={classes.order} onClick={addProductToCartHandler}>Order</button>
				</li>
			</div>
		</Card>
	);
};

export default ProductItem;
