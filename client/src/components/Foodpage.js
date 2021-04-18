import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Foodpage = () => {

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
      <h1>{foods[0].title}</h1>
    </>

  )
}

export default Foodpage