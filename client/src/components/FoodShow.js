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

  const fatPercentage = Math.floor(parseFloat(`${food.fat}`) / parseFloat(`${food.weight}`) * 100)
  const ProteinPercentage = Math.floor(parseFloat(`${food.protein}`) / parseFloat(`${food.weight}`) * 100)
  const CarbsPercentage = Math.floor(parseFloat(`${food.carbs}`) / parseFloat(`${food.weight}`) * 100)
  
  return (
    <> 
      <section className="main-container">
        <div className="item-container">
          <div className="item-search">Search bar - if there is time.</div>
          <div className="food-title">
            <h2 className="item-title">{food.title}</h2>
          </div>
          <div className="item-serving">
            <h3>Serving size: {food.serving} {food.servingAs}</h3>
          </div>
          <div className="macro-container">
            <div className="macro-calorie">
              <h4 className="food-calories">{food.calories}</h4><span className="calories-span">Calories</span>
            </div>
            <div className="macro-carbs">
              <span className="carbs-percentage">{CarbsPercentage + '%'}</span><h4 className="carbs macro">{food.carbs}<span className="gram-span">g</span></h4><span className="macro-content">Carbs</span>
            </div>
            <div className="macro-fat">
              <span className="fat-percentage">{fatPercentage + '%'}</span><h4 className="fat macro">{food.fat}<span className="gram-span">g</span></h4><span className="macro-content">Fat</span>
            </div>
            <div className="macro-protein">
              <span className="protein-percentage">{ProteinPercentage + '%'}</span><h4 className="protein macro">{food.protein}<span className="gram-span">g</span></h4><span className="macro-content">Protein</span>
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
