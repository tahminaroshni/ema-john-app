import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useCart(products);


  useEffect(() => {
    fetch('products.JSON')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className='shop'>
      <div className="products-container">
        {
          carts.map(product => <ReviewItem product={product} />)
        }
      </div>
      <div className="cart-container">
        <Cart carts={carts} />
      </div>
    </div>
  );
};

export default OrderReview;