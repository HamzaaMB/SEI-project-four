import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const LogbookShow = () => {

  const params = useParams()

  const [logbook, setLogbook] = useState(null)


  useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token')
      const { data } = await axios.get(`/api/logbook/${params.id}`, {
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
      <div className="bookshow-container">
        <div className="bookshow-list">
          <h3 className="bookshow-name">{logbook.name}</h3>
          <div className="bookshow">
            {logbook.food.map(i => {
              return <div className="show-tile" key={i.id}>
                <h4 className="show-food">{i.title}</h4>
                <h6 className="show-calories">{i.calories}</h6>
              </div>
            })
            }
          </div>
          <div className="total-tile">
            <h4 className="total-title">Total Calories</h4>
            <div className="show-total">
              {logbook.food.reduce((acc, value) => {
                return acc + value.calories
              }, 0)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
  

}

export default LogbookShow    

// { logbook.map(item => {
//   return item.food.map(i => {
//     return <div className="food-book" key={i.id}>
//       <h6>{i.title}</h6>
//       <p>{i.calories}</p>
//     </div>
//   })})
// }