import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

// import FoodIndex from './FoodIndex'


const FoodShow = () => {  


  
  const params = useParams()
  console.log(params.id)
  const [food, setFood] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`api/foods/${params.id}/`)
      setFood(response.data)
    }
    getData()
  }, [])
  

  if (!food) return null
  console.log(food)
  
  
  return <p>Working new page</p>
  
}

export default FoodShow