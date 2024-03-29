import React from 'react';

const ReviewItem = (props) => {
  const { name, price, seller, quantity } = props.product;

  return (
    <div>
      <h3 className='product-name'>{name}</h3>
      <h3
        style={{ color: '#b12704', fontSize: '14px', fontWeight: 'bold' }}
        className='product-price'>${price}</h3>
      <p><small>sold by:</small> <span>{seller}</span></p>
      <p>Quantity: {quantity} </p>
      <button className='btn-regular'>Remove</button>
    </div>
  );
};

export default ReviewItem;