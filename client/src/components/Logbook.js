import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Logbook = () => {

  const [logbook, setLogbook] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/logbook/')
      setLogbook(data)
    }
    getData()
  }, [])

  if (!logbook) return null
  console.log(logbook)
  return (
    <h1>hello</h1>
  )
}

export default Logbook