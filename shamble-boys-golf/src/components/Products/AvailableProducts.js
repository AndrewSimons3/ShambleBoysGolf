import React from 'react';
import classes from './AvailableProducts.module.css';
import ProductItem from './ProductItem';
import Flamingo from '../../assets/flamingo.webp';

const DUMMY_PRODUCTS = [
	{
		id: 'p1',
		name: 'Bloomer',
		description:
			'Consumer reports show an increased number of club twirls when wearing the Bloomer.',
		price: 69.99,
		size: ['Small', 'Medium', 'Large'],
	},
	{
		id: 'p2',
		name: 'Friday',
		description: "Start the party, it's FRIDAY AT 5.",
		price: 79.99,
		size: ['Small', 'Medium', 'Large'],
	},
	{
		id: 'p3',
		name: 'Gimme',
		description: 'No course record is safe when you pull up in the Gimme',
		price: 79.99,
		size: ['Small', 'Medium', 'Large'],
	},
	{
		id: 'p4',
		name: 'Flower',
		description: 'A polo that will certainly get the cart girls attention.',
		price: 69.99,
		size: ['Small', 'Medium', 'Large'],
	},
	{
		id: 'p5',
		name: 'Flamingo',
		description: 'Bombs only are allowed while rocking this look.',
		price: 69.99,
    size: ['Small', 'Medium', 'Large'],
    image: Flamingo
	},
	{
		id: 'p6',
		name: 'Maverick',
		description: "Throw on the aviators and make birdie for Goose.",
		price: 79.99,
		size: ['Small', 'Medium', 'Large'],
	},
];

const productList = DUMMY_PRODUCTS.map((product) => (
	<ProductItem
		id={product.id}
		key={product.id}
		name={product.name}
		description={product.description}
    price={product.price}
    image={product.image}
    size={product.size}
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
