import './App.css';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import Products from './components/Products/Products';
import Footer from './components/Layout/Footer';
import CartProvider from './components/store/CartProvider';

function App() {
	const [showCart, setShowCart] = useState(false);

	const showCartHandler = () => {
		setShowCart(true);
	};

	const hideCartHandler = () => {
		setShowCart(false);
	};

	return (
		<CartProvider>
			{showCart && <Cart onHideCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
      <Main />
      <Products />
      <Footer />
		</CartProvider>
	);
}

export default App;
