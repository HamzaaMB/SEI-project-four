import React, { useEffect, useState } from 'react'
import axios from 'axios'
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

            <div className="logbook-welcome"><h4>Welcome back {logbook[0].owner.first_name}</h4></div>
            <div className="logbook-status"><h4>You have {logbook.length} logbooks</h4></div>

          </div>
          <div className="logbook-main">
            {logbook.map(item => {
              return <div className="book" key={item.id}>
                <div className="name-book">
                  <h4 className="logbook-name">{item.name}</h4>
                  <p className="calories-name">Calories</p>
                  <p></p>
                </div>
              </div>
            })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Logbook


/* <Button className="hero-button" variant="primary" href="/foods">Add Food</Button> */


// {logbook.map(item => {
//   return item.food.map(i => {
//     return <div className="food-book" key={i.id}>
//       <h6>{i.title}</h6>
//       <p>{i.calories}</p>
//     </div>
//   })})
// }

// {logbook.map(item => {
//   return 
//     <div className="food-book" key={item.id}>
//       <h4 className="logbook-name">{item.name}</h4>
//       <p className="calories-name">Calories</p>
//     </div> 
//     </div>
//       })
//     }