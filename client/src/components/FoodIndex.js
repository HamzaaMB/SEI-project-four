import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const FoodIndex = () => {

  const [foods, setFoods] = useState(null)
  const [filteredFood, setFilteredFood] = useState([])
  console.log(filteredFood)
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('api/foods/')
      setFoods(data)
    }
    getData()
  }, [])
  console.log(foods)

  const handleChange = event => {
    console.log(event.target.value)
    const filteredArray = foods.filter(food => {
      return food.title.toUpperCase().includes(event.target.value.toUpperCase())
    })
    setFilteredFood(filteredArray)
  }

  if (!foods) return null

  return (
    <>
      <div className='search'>
        <input type ='text' placeholder='Search for foods' onChange={handleChange}></input>
      </div>
      <div>
        {foods.map(food => {
          return <Link to={`/foods/${food.id}`} key={food.id}>
            <div className="results-container">
              <ul className="food-list">
                <div className="food-results">
                  <li><h4 className="title-search">{food.title}</h4></li>
                  <li><h6 className="serving-search">{food.serving} {food.servingAs}, {food.weight}g</h6></li>
                  <li><h6 className="macros-search">Carbs: {food.carbs} | Protein: {food.protein} | Fat: {food.fat}</h6></li>
                </div>
              </ul>
            </div>
          </Link>
        })}
      </div>
      
    </>

  )
}

export default FoodIndex