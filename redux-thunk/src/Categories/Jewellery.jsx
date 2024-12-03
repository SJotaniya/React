import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApi } from '../Components/Slice';
import Navbar from '../Components/MainNavbar';

export default function Jewellery() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);

  const product = useSelector((state) => state.dataKey);

  const womanWear = product.data?.filter(
    (product) => product.category === "jewelery"
  );

  return (
    <>
      <Navbar />
      <center className="category-title"><h1>Jewellries</h1></center>
      <div className="product-container">
        {womanWear.map((product, index) => {
          return (
            <div className="product-card" key={index}>
              <div className="product-image-container">
                <img className="product-image" src={product.image} alt="" />
              </div>
              <div className="product-info">
                <p className="product-title">{product.title}</p>
                <p className="product-category">{product.category}</p>
                <p className="product-price">${product.price}</p>
                <p className="product-rating">Ratings : {product.rating.count}</p>
                <button className="add-to-cart-button">Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
