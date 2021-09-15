import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
function Product({ imageUrl, name, description, price, product_id }) {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <div className="product_info">
        <p className="info_name">{name}</p>
        <p className="info_description">{description.substring(1, 100)}...</p>
        <p className="info_price">${price}</p>
        <Link to={`./product/${product_id}`} className="info_button">
          Veiw
        </Link>
      </div>
    </div>
  );
}

export default Product;
