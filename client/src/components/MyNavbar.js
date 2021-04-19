import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// import { userIsAuthenticated } from './auth/helpers/auth'


const MyNavbar = () => {

  // const history = useHistory()

  // const handleLogout = () => {
  //   window.localStorage.removeItem('token')
  //   history.push('/')

  const location = useLocation()

  useEffect(() => {
  }, [location.pathname])

  return (

    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>  
        </Nav>  
      </Navbar.Collapse>
    </Navbar>
  )

}


export default MyNavbar