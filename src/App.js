import React from 'react'
import { Router, Route, Switch } from "react-router-dom"
import './App.css'
import HomeScreen from './screens/HomeScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TeamScreen from './screens/TeamScreen'
import EventsScreen from './screens/EventsScreen'
import LeaderBoard from './screens/LeaderBoard'



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/team' component={TeamScreen} />
        <Route path='/events' component={EventsScreen} />
        <Route path='/leader' component={LeaderBoard} />
      </Switch>
      <div style={{bottom:0}}><Footer /></div>

    </>
  )
}

export default App;
