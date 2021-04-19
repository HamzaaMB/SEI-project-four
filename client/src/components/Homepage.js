import React from 'react'
import Button from 'react-bootstrap/Button'



const Homepage = () => {



  return (
    <>
      <div className ="hero-container">
        <div className="hero-title">You are<br/> what you<br/> eat.</div>
        <div>
          <Button className="hero-button" variant="primary" href="/foods">Start Here</Button>
        </div>
        <div className="hero-login">Already have an account? <a href="/login">Login</a></div>
      </div>
    </>

  )
}

export default Homepage