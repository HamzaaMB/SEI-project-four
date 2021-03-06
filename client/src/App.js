import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Homepage from './components/Homepage'
import FoodIndex from './components/FoodIndex'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Logbook from './components/Logbook'
import LogbookShow from './components/LogbookShow'
import MyNavbar from './components/MyNavbar'
import FoodShow from './components/FoodShow'



const App = () => {


  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path ="/">
            <MyNavbar class="nav-home" />
            <Homepage />
          </Route>
          <Route path ="/foods/:id">
            <MyNavbar class="nav-home" />
            <FoodShow />
          </Route>
          <Route exact path ="/foods">
            <MyNavbar class="nav-home" />
            <FoodIndex />
          </Route>
          <Route path = "/login">
            <MyNavbar class="nav-home" />
            <Login />
          </Route>
          <Route path = "/register">
            <MyNavbar class="nav-home" />
            <Register />
          </Route>
          <Route path = "/logbook/:id">
            <MyNavbar class="nav-home" />
            <LogbookShow />
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

