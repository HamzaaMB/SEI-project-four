import React from 'react'
import Button from 'react-bootstrap/Button'



const Homepage = () => {



  return (
    <>
      <div className ="hero-container">
        <div className="main-title">You are<br/> what you<br/> eat.</div>
        <div>
          <Button className="start-button" variant="primary" href="/foods">Start Here</Button>
        </div>
        <div>Already have an account? Login</div>
      </div>
    </>

  )
}

export default Homepage