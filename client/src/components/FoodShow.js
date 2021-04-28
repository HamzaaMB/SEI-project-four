import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { userIsAuthenticated } from './auth/helpers/auth'
import Select from 'react-select'


const FoodShow = () => {  

  const params = useParams()
  const history = useHistory()

  const [food, setFood] = useState(null)
  const [formData, setFormData] = useState({
    food: '',
  })

  const [selectedLogbook, setSelectedLogbook] = useState(null)

  


  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/foods/${params.id}/`)
      setFood(data)
    }
    getData()
  }, []) 

  const handleExistingSubmit = async event => {
    event.preventDefault()
    const token = window.localStorage.getItem('token')
    console.log('food ID>>', food.id)
    const idToSend = {
      id: food.id,
    }
    const response = await axios.post(`/api/logbook/${selectedLogbook.id}/`, idToSend, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    history.push('/logbook')
    console.log('submit response', response)
  }

  useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token')
      const { data } = await axios.get('/api/logbook', {
        headers: {
          Authorization: `Bearer ${token}`,
        }, 
      })
      setFormData(data)
    }
    getData()
  }, []) 

  const handleExistingChange = async (selected) => {
    setSelectedLogbook(selected)
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
          <div className="item-crumb">
            <Breadcrumb style={{ color: 'white' }}>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/foods">Food Search</Breadcrumb.Item>
              <Breadcrumb.Item active>Food</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="food-title">
            <h2 className="item-title">{food.title}</h2>
          </div>
          <div className="item-serving">
            <h3 className="serving-size">Serving size: {food.serving} {food.servingAs}</h3>
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
            { userIsAuthenticated && 
            <form onSubmit={handleExistingSubmit}>
              <div className="field">
                <label className="label-existing">Add to existing logbook</label>
                <div className="control">
                  <Select
                    options={formData}
                    onChange={(selected) => handleExistingChange(selected)}
                    getOptionValue={(formData) => formData.name}
                    getOptionLabel={(formData) => formData.name}
                  >
                  </Select>
                </div>
              </div>
              <div className="field">
                <Button type="submit" className="hero-button" variant="primary">Add Food</Button>
              </div>
            </form>
            }
            { !userIsAuthenticated &&
              <h4>Login to add to logbook</h4>
            }
          </div>
        </div>
      </section>
    </>
  )




}

export default FoodShow
