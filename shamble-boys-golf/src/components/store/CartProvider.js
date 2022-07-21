import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	products: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount =
			state.totalAmount + action.product.price * action.product.amount;

		const existingCartProductIndex = state.products.findIndex(
			(product) => product.id === action.product.id
		);

		const existingCartProduct = state.products[existingCartProductIndex];
		let updatedProducts;

		if (existingCartProduct) {
			const updatedProduct = {
				...existingCartProduct,
				amount: existingCartProduct.amount + action.product.amount,
			};
			updatedProducts = [...state.products];
			updatedProducts[existingCartProductIndex] = updatedProduct;
		} else {
			updatedProducts = state.products.concat(action.product);
		}

		return {
			products: updatedProducts,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === 'REMOVE') {
		const existingCartProductIndex = state.products.findIndex(
			(product) => product.id === action.id
		);
		const existingProduct = state.products[existingCartProductIndex];
		const updatedTotalAmount = state.totalAmount - existingProduct.price;

		let updatedProducts;
		if (existingProduct.amount === 1) {
			updatedProducts = state.products.filter(
				(product) => product.id !== action.id
			);
		} else {
			const updatedProduct = {
				...existingProduct,
				amount: existingProduct.amount - 1,
			};
			updatedProducts = [...state.products];
			updatedProducts[existingCartProductIndex] = updatedProduct;
		}

		return {
			products: updatedProducts,
			totalAmount: updatedTotalAmount,
		};
  }
  
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addProductToCartHandler = (product) => {
		dispatchCartAction({ type: 'ADD', product: product });
	};
	const removeProductFromCartHandler = (id) => {
		dispatchCartAction({ type: 'REMOVE', id: id });
	};

	const cartContext = {
		products: cartState.products,
		totalAmount: cartState.totalAmount,
		addProduct: addProductToCartHandler,
		removeProduct: removeProductFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
