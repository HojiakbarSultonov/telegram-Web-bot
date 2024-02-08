import React from 'react';
import Button from '../button/Button';
import './Cart.css';

function Cart({ onCheckout, cartItems }) {
	return (
		<div className='cart__container'>
			<p>Umumiy narx: $12.00</p>
			<Button title='Buyurtma' type='checkout' onClick = {onCheckout}/>
		</div>
	);
}

export default Cart;
