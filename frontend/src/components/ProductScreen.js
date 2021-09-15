import React, { useEffect, useState } from 'react';
import './ProductScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../redux/actions/productAction';
import { addToCart } from '../redux/actions/cartActions';

function ProductScreen({ match, history }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  console.log(product);
  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);
  const handleAddToCart = () => {
    dispatch(addToCart(product._id, qty));
    history.push('/cart');
  };
  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading....</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen_left">
            <div className="left_image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left_info">
              <p className="left_name">{product.name}</p>
              <p className="left_price">price: ${product.price}</p>
              <p className="left_description">
                Description: {product.description}
              </p>
            </div>
          </div>
          <div className="productscreen_right">
            <div className="right_info">
              <p>
                Price: <span>${product.price}</span>
              </p>
              <p>
                Status:{' '}
                <span>
                  {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                </span>
              </p>
              <p>
                Qty:
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={handleAddToCart}>
                  {' '}
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductScreen;
