import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const FoodIndex = () => {

  const [foods, setFoods] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('api/foods/')
      setFoods(data)
    }
    getData()
  }, [])
  console.log(foods)

  if (!foods) return null
  return (
    <>
      <div>
        {foods.map(food => {
          return <Link to={`/foods/${food.id}`} key={food.id}>
            <li>
              <h1>{food.title}</h1>
            </li>
          </Link>
        })}
      </div>
      
    </>

  )
}

export default FoodIndex