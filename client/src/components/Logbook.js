import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { userIsAuthenticated } from './auth/helpers/auth'


const Logbook = () => {

  const [logbook, setLogbook] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token')
      const { data } = await axios.get('/api/logbook/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setLogbook(data)
    }
    getData()
  }, [])

  if (!logbook) return null
  console.log(logbook)

  return (
    <>
      {userIsAuthenticated() &&
      <h1>
        {logbook[0].name}, {logbook[0].food}
      </h1>
      }
    </>
  )
}

export default Logbook