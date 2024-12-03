import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApi } from './Components/Slice';
import Navbar from './Components/MainNavbar'

export default function Home() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);

  const product = useSelector((state) => state.dataKey);

  return (
    <>
      <Navbar/>
      <div className="product-container">
        {product.data &&
          product.data.map((product, index) => {
            return (
              <div className="product-card" key={index}>
                <div className="product-image-container">
                  <img className="product-image" src={product.image} alt="Image Not Available" />
                </div>
                <div className="product-info">
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">${product.price}</p>
                  <p className="product-category">{product.category}</p>
                  <button className="add-to-cart-button">Add To Cart</button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
