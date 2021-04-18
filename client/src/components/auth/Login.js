import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const history = useHistory()

  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
    console.log(formData)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await axios.post('api/auth/login/', formData)
    window.localStorage.setItem('token', response.data.token)
    history.push('/logbook')

    console.log(response)
  }


  return (

    <form onSubmit={handleSubmit}>
      <label className="label">Email</label>
      <input
        className="input"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={(event) => handleChange(event)}
      />
              
      <label className="label">Password</label>
      <input
        className="input"
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={(event) => handleChange(event)}
      />
      <button type="submit" className="button register-button">Log Me In!</button>
    </form>
  )


}

export default Login


