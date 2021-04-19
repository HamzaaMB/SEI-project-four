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
      <Navbar style={{ width: '100%', margin: 'auto' }} bg="primary" expand="lg" variamt="dark"> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <div className="main-navbar">
              <div className="nav-item-left">
                <Nav.Link href="/foods">Food</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </div>
              <div className="nav-item-right">
                {userIsAuthenticated() &&
          <>
            <Nav.Link href="/logbook">Logbook</Nav.Link>
            <Nav.Link onClick = {handleLogout}>Logout</Nav.Link>
          </>  
                }
                {!userIsAuthenticated() &&
          <> 
            <Nav.Link className="border-left pl-2 ml-auto" href="/login">Login</Nav.Link>
            <Nav.Link className="border-left pl-2 ml-auto" href="/register">Register</Nav.Link>
          </>
                }
              </div>
            </div>
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