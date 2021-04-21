import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { userIsAuthenticated } from './auth/helpers/auth'


const MyNavbar = () => {

  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
    window.location.reload()
  }

  console.log(handleLogout)

  return (
    <>
      <Navbar style={{ paddingLeft: '185px' }} bg="primary" variamt="dark"> 
        <Navbar.Brand href="/"><h1 className="brand-logo">TrackMyCal</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link style ={{ color: 'white' }} href="/foods">Food</Nav.Link>
            {userIsAuthenticated() &&
          <>
            <Nav.Link style ={{ color: 'white' }} href="/logbook">Logbook</Nav.Link>
            <Nav.Link style ={{ color: 'white' }} onClick = {handleLogout}>Logout</Nav.Link>
          </>  
            }
            {!userIsAuthenticated() &&
          <> 
            <Nav.Link style ={{ color: 'white' }} href="/login">Login</Nav.Link>
            <Nav.Link style ={{ color: 'white' }} href="/register">Register</Nav.Link>
          </>
            }
          </Nav>  
        </Navbar.Collapse>
      </Navbar>
    </>
  )

}


export default MyNavbar

