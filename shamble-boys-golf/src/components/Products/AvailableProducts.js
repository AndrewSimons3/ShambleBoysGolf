import React from 'react';
import classes from './AvailableProducts.module.css';
import ProductItem from './ProductItem';

const DUMMY_PRODUCTS = [
	{
		id: 'p1',
		name: 'Golf hat',
		description: 'Performance golf hat',
		price: 50.99,
	},
	{
		id: 'p2',
		name: 'Polo',
		description: 'Performance golf polo',
		price: 30.99,
	},
	{
		id: 'p3',
		name: 'Athletic Hoodie',
		description: 'Hoodie for on and off the golf course',
		price: 70.99,
	},
	{
		id: 'p4',
		name: 'Golf shorts',
		description: 'Performance golf shorts',
		price: 50.99,
	},
	{
		id: 'p5',
		name: 'Alternate Polo',
		description: 'Black performance polo',
		price: 30.99,
	},
	{
		id: 'p6',
		name: 'Golf pants',
		description: 'Pants for cold weather',
		price: 70.99,
	},
];

const productList = DUMMY_PRODUCTS.map((product) => (
	<ProductItem
		id={product.id}
		key={product.id}
		name={product.name}
		description={product.description}
		price={product.price}
	/>
));

const AvailableProducts = () => {
	return (
		<div className={classes['product-wrapper']}>
			<ul>{productList}</ul>
		</div>
	);
};

export default AvailableProducts;
