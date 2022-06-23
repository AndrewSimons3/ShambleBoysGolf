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
		});
	};

	return (
		<Card className={classes.card}>
			<div className={classes['product-wrapper']}>
				<li>
					<h2>{props.name}</h2>

					<div className={classes.info}>
						<span>{props.description}</span>
						<span>{props.price}</span>
						<label>Size</label>
						<div className={classes.sizes}>
							<button onClick={addProductToCartHandler}>{props.size[0]}</button>
							<button>{props.size[1]}</button>
							<button>{props.size[2]}</button>
						</div>
					</div>
				</li>
			</div>
		</Card>
	);
};

export default ProductItem;
