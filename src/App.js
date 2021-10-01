import React from 'react'
import { Router, Route, Switch } from "react-router-dom"
import './App.css'
import HomeScreen from './screens/HomeScreen'

import Footer from './components/Footer'


function App() {
  return (
    <>
      
      <Switch>
        <Route exact path='/' component={HomeScreen} />
      </Switch>
      <Footer/>
    </>
  )
}

export default App;
