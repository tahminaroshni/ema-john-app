import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Meal.css'

const Meal = (props) => {
  // console.log(props);
  const { strArea, strMeal, strMealThumb, strInstructions } = props.meal;
  return (
    <div className='meal'>
      <div className="meal-img">
        <img src={strMealThumb} alt="" />
      </div>
      <h3>{strMeal}</h3>
      <h3>Area: {strArea}</h3>
      <p className='meal-details'>{strInstructions}</p>
      <button onClick={() => props.handleAddName(strMeal)} >
        <FontAwesomeIcon icon={faShoppingBasket} />
        Add Name</button>
    </div>
  );
};

export default Meal;