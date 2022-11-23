import React from 'react';

const Cart = ({ carts }) => {
  // console.log(carts);

  return (
    <div>
      <h3>Selected Meals Name</h3>
      {
        carts.map((cart) => {
          return <p key={Math.random()}>{cart}</p> //not perfect using random number
        })
      }
    </div>
  );
};

export default Cart;