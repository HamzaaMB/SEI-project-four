import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Homepage from './components/Homepage'
import Foodpage from './components/Foodpage'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Logbook from './components/Logbook'
import MyNavbar from './components/MyNavbar'


const App = () => {


  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path ="/">
            <MyNavbar class="nav-home" />
            <Homepage />
          </Route>
          <Route path ="/foods">
            <MyNavbar class="nav-home" />
            <Foodpage />
          </Route>
          <Route path = "/login">
            <MyNavbar class="nav-home" />
            <Login />
          </Route>
          <Route path = "/register">
            <MyNavbar class="nav-home" />
            <Register />
          </Route>
          <Route path = "/logbook">
            <MyNavbar class="nav-home" />
            <Logbook />
          </Route>
        </Switch>
      </BrowserRouter>
      


    </>
  )


}

export default App

