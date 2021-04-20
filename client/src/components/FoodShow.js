import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
// import { userIsOwner } from './auth/helpers/auth'
// import FoodIndex from './FoodIndex'


const FoodShow = () => {  

  const params = useParams()


  const [food, setFood] = useState(null)



  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/foods/${params.id}/`)
      setFood(data)
    }
    getData()
  }, [])
  
  const handleSubmit = (event) => {
    console.log('working', event.target)
  }

  if (!food) return null
  console.log(food)

  return (
    <> 
      <section className="main-container">
        <div className="item-container">
          <div className="item-search">Search bar - if there is time.</div>
          <div className="food-title">
            <h2 className="item-title">{food.title}</h2>
          </div>
          <div className="item-serving">
            <h3>{food.serving} {food.servingAs}</h3>
          </div>
          <div className="macro-container">
            <div className="macro-calorie">
              <h4>{food.calories} <span>calories</span></h4>
            </div>
            <div className="macro-carbs">
              <h4>{food.carbs}<span>g</span></h4>
            </div>
            <div className="macro-fat">
              <h4>{food.fat}<span>g</span></h4>
            </div>
            <div className="macro-protein">
              <h4>{food.protein}<span>g</span></h4>
            </div>
          </div>
          <div className="item-add">
            <Button onClick={handleSubmit}>Add to Logbook</Button>
          </div>
        </div>
      </section>
        
  
    </>
  )




}

export default FoodShow
