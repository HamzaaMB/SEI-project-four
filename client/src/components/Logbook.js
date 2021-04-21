import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { userIsAuthenticated } from './auth/helpers/auth'


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
      { (logbook.length > 0) &&
      <div>
        {logbook.map(item => {
          return <h3 key={item.id}>{item.name}</h3>
        })}
        {logbook.map(item => {
          return item.food.map(i => {
            return <h4 key={i.id}>{i.title}</h4>
          })
        })}
      </div>
      }
    </>
  )
}

export default Logbook