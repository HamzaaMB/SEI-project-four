import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'



const Register = () => {

  const [formData, setFormData] = useState({
    first_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  // const [errors, setErrors] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   password_confirmation: '',
  // })

  const handleChange = event => {
    console.log(event.target.value)
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post('api/auth/register/', formData)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
  console.log(formData)

  return (
    <section className="register-wrapper">
      <div className="register-box">
        <form onSubmit={handleSubmit}>
          <div className="email-container">
            <label className="label">first name</label>
            <input
              className="input"
              type="FirstName"
              placeholder="FirstName"
              name="first_name"
              value={formData.first_name}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="email-container">
            <label className="label">Username</label>
            <input
              className="input"
              type="Username"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={(event) => handleChange(event)} 
            />
          </div>
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
          <div className="password-container">
            <label className="label">Password Confirmation</label>
            <input
              className="input"
              type="password Confirmation"
              placeholder="Password Confirmation"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="login-button register-button">
            <Button type="submit" className="hero-button" variant="primary">Sign Me Up</Button>
          </div>
        </form>
      </div>
    </section>
  )



}

export default Register