import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
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
      <div className="logbook-container">
        <div className="logbook-box">
          <div className="logbook-top">

            <div className="logbook-status"><h4>You have {logbook.length} logbooks</h4></div>
            <div className="logbook-welcome"><h4>Welcome back {logbook[0].owner.first_name}</h4></div>
            
          </div>
          <div className="logbook-main">
            {logbook.map(item => {
              return <Link to={`/logbook/${item.id}`} key={item.id}>
                <div className="book" key={item.id}>
                  <div className="name-book">
                    <h4 className="logbook-name">{item.name}</h4>
                  </div>
                </div>
              </Link>
            })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Logbook
