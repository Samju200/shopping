import React from 'react';
import CartItem from './CartItem';
import './CartScreen.css';

import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
function CartScreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const handleQtyChange = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  const handleRemoveCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };
  return (
    <div className="cartscreen">
      <div className="cartscreen_left">
        <h2> Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            {' '}
            Your cart is Empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              id={item.product}
              item={item}
              handleQtyChange={handleQtyChange}
              handleRemoveCart={handleRemoveCart}
            />
          ))
        )}
      </div>
      <div className="cartscreen_right">
        <div className="cartscreen_info">
          <p>Subtotal ({getCartCount()}) Item</p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <button> Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
