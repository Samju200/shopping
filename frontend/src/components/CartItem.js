import React from 'react';
import { Link } from 'react-router-dom';
import { Delete } from '@material-ui/icons';
import './CartItem.css';
function CartItem({ item, handleQtyChange, handleRemoveCart }) {
  return (
    <div className="cartitem">
      <div className="cartitem_image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`}>
        <p>{item.name}</p>
      </Link>
      <p className="cartitem_price">${item.price}</p>
      <select
        className="cartitem_select"
        value={item.qty}
        onChange={(e) => handleQtyChange(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartitem_delete"
        onClick={() => handleRemoveCart(item.product)}
      >
        <Delete />
      </button>
    </div>
  );
}

export default CartItem;
