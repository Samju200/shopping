import React from 'react';
import './SideDrawer.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SideDrawer({ show }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <div className={show ? 'sidedrawer' : 'show'}>
      <ul className="sidedrawer_links">
        <li>
          <Link to="/cart" className="sidedrawer_link">
            <ShoppingCartIcon />
            <span>
              Cart
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;
