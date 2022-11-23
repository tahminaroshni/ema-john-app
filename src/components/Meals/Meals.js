
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [carts, setCarts] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // load meals
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`)
      .then(res => res.json())
      .then(data => {
        setMeals(data.meals);
        setSearchResults(data.meals);
      })
  }, [])

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then(res => res.json())
      .then(data => setSearchResults(data.meals))
  }, [searchText]);
  // console.log(searchResults);

  const handleAddName = (name) => {
    setCarts([...carts, name]);
  }

  const handleSearchedMeal = (e) => {
    const mealName = e.target.value;
    console.log(mealName);
    setSearchText(mealName);
  }

  return (
    <div>
      <input style={{ padding: '5px', width: '60%', marginTop: '10px' }}
        onChange={handleSearchedMeal}
        type="text" placeholder='Search your meal' />
      <div className='container'>
        <div className="meals-container">
          {
            searchResults.length ? searchResults.map(meal => <Meal key={meal.idMeal} meal={meal} handleAddName={handleAddName} />) : console.log(searchResults)
          }
        </div>
        <div className="carts-container">
          <Cart carts={carts} />
        </div>
      </div>
    </div>
  );
};

export default Meals;