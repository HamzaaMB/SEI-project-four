import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { userIsOwner } from './auth/helpers/auth'
// import FoodIndex from './FoodIndex'


const FoodShow = () => {  


  const owner = userIsOwner()
  console.log('owner', owner)
  
  const params = useParams()
  console.log(params.id)
  const [food, setFood] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/foods/${params.id}/`)
      setFood(response.data)
    }
    getData()
  }, [])

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get('api/logbooks')
  //   }
  // })
  

  if (!food) return null
  console.log(food)

  
  
  return <p></p>
  
}

export default FoodShow