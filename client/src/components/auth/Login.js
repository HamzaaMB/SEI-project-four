import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'


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
    <section className="login-wrapper">
      <div className="login-box">
        <form className= "login-form" onSubmit={handleSubmit}>
          <div className="email-container">
            <label className="label">Email</label>
            <input
              className="input"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="password-container">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="login-button">
            <Button type="submit" className="hero-button" variant="primary">Login</Button>
          </div>
        </form>
      </div>
    </section>
  )

}

export default Login


