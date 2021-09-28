import React from 'react'
import { Router, Route, Switch } from "react-router-dom"
import './App.css'
import HomeScreen from './screens/HomeScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomeScreen} />
      </Switch>
    </>
  )
}

export default App;
