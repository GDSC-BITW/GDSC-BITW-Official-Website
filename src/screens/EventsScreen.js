import {Grid} from '@material-ui/core/';
import React from 'react'
import eventCard from '../components/eventCard'
import Table from "../components/Table";
import EventCard from "../components/eventCard";

const Events = (props) => {
  
return(
  <div>
    <Grid container className="team-section" justifyContent="space-around" alignItems="center">
        <Grid item sm={12} xsm={12} lg={6} xlg={8} justifyContent="center" alignItems="center" >
          <strong className="heading blue">HACKATHONS</strong>
          <strong className="heading red"> STUDY-JAMS</strong>
          <strong className="heading yellow"> WOKRSHOPS</strong>
          <strong className="heading green"> CP?</strong>
          <p className="desc section-decription" > We got it all covered. Here at GDSC-BITW, We encourage it all. We believe one can develop faster within a group, and this is all what we want. We are open for collaborations and look forward to work with you.</p>

        </Grid>
        <Grid item sm={12} xsm={12} lg={4} xlg={4} justifyContent="center" alignItems="center" >
          <img src="../images/hero.png" alt="aa" className="teamimg hero-img" />
        </Grid>
      </Grid>

      <div class="jsx-1703132234 row">
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-yellow"></div>
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-blue"></div>
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-red"></div>
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-green"></div>
      </div>

      <Grid container class="events" justifyContent="start" alignItems="left" direction="row">
          <Grid item sm={12} xsm={12} lg={12} xlg={12} className="event-sections" justifyContent="start" alignItems="left">
            <strong className="heading-2">Our </strong> <strong className="heading-2 blue">Events</strong>
            <p className="desc section-decription" >Questions? Please contact <a href=""> lead@gdscbitw.study</a></p>
          </Grid>

          <Grid item sm={12} xsm={12} lg={12} xlg={12} className="event-sections" justifyContent="start" alignItems="left" >
          <strong className="heading-2">Our Future </strong> <strong className="heading-2 blue">Events & Meetups</strong>
            <p className="desc section-decription" >Events are listed in reverse chronological order by date.</p>
            <br/>
            <EventCard/>
          </Grid>
          
          <Grid item sm={12} xsm={12} lg={12} xlg={12} className="event-sections" justifyContent="start" alignItems="left" >
          <strong className="heading-2">Directory of </strong> <strong className="heading-2 blue">Past Events</strong>
            <p className="desc section-decription" >Events are listed in reverse chronological order by date.</p>
            <br/>
            <Table/>
          </Grid>
      </Grid>


  </div>
  )
}
export default Events
