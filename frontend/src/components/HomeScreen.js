import React, { useEffect } from 'react';
import './HomeScreen';
import Product from './Product';
import './HomeScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../redux/actions/productAction';
function HomeScreen() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="homescreen">
      <h2 className="homescreen_title">Lastest Products</h2>
      <div className="homescreen_products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              product_id={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
