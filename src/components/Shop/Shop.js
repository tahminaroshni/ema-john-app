import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToLocalStorage } from '../../utilities/addToLocalStorage';
import useCart from '../hooks/useCart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [carts, setCarts] = useCart(products);

  useEffect(() => {
    fetch('products.JSON')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setDisplayProducts(data);
      })
  }, [])

  // // load data from local storage
  // useEffect(() => {
  //   if (products.length) {
  //     // console.log(products);
  //     const cart = JSON.parse(localStorage.getItem('cart'));
  //     const storedCart = [];
  //     for (const key in cart) {
  //       const addedProduct = products.find(product => product.key === key);
  //       storedCart.push(addedProduct);
  //     }
  //     setCarts(storedCart)
  //   }
  // }, [products])

  const handleAddToCart = (product) => {
    product.quantity = 1;
    const newCart = [...carts, product];
    setCarts(newCart);

    // Add data to local storage
    addToLocalStorage(product.key);
  }

  const handleSearchField = (e) => {
    const searchText = e.target.value;
    const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
    // console.log(matchedProducts);
    setDisplayProducts(matchedProducts);
  }

  return (
    <div>
      <div className="search-container">
        <input onChange={handleSearchField} type="text" placeholder='type here to search' />
        {/* <FontAwesomeIcon icon={faShoppingCart} className="shopping-cart" /> */}
      </div>
      <div className='shop'>
        <div className="products-container">
          {
            displayProducts.map(product => <Product key={product.key} product={product} btnHandler={handleAddToCart} />)
          }
        </div>
        <div className="cart-container">
          <Cart carts={carts} />
        </div>
      </div>
    </div>
  );
};

export default Shop;