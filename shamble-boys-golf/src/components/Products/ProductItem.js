import React from 'react';
import classes from './ProductItem.module.css';
import Card from '../UI/Card';

const ProductItem = (props) => {
	return (
		<Card className={classes.card}>
			<div className={classes['product-wrapper']}>
				<li>
					<h2>{props.name}</h2>

					<div className={classes.info}>
						<span>{props.description}</span>
						<span>{props.price}</span>
					</div>
					<div className={classes.actions}>
						<button>Order Now</button>
					</div>
				</li>
			</div>
		</Card>
	);
};

export default ProductItem;
