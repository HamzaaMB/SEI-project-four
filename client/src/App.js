import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Homepage from './components/Homepage'
import Foodpage from './components/Foodpage'
import Login from './components/auth/Login'
import Register from './components/auth/Register'


const App = () => {


  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path ="/">
            <Homepage />
          </Route>
          <Route path ="/foods">
            <Foodpage />
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path = "/register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
      


    </>
  )


}

export default App

