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
  // const location = useLocation()

  // useEffect(() => {
  // }, [location.pathname])

  return (
    <>
      <div className="logo">
        <p>My Foodie Pal?</p>
      </div>
      <Navbar bg="primary" expand="lg" variamt="dark"> 
        <Navbar.Brand href="/">MyFoodiePal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/foods">Food</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {userIsAuthenticated() &&
          <>
            <Nav.Link href="/logbook">Logbook</Nav.Link>
            <Nav.Link onClick = {handleLogout}>Logout</Nav.Link>
          </>  
            }
            {!userIsAuthenticated() &&
          <> 
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </>
            }
          </Nav>  
        </Navbar.Collapse>
      </Navbar>
    </>
  )

}


export default MyNavbar

// {userIsAuthenticated &&
//   <>
//     <Nav.Link href="/logbook">Logbook</Nav.Link>
//     <Nav.Link onClick = {handleLogout}>Logout</Nav.Link>
//   </>
//   }

//to add margin
//style={{ marginTop: '100px' }}