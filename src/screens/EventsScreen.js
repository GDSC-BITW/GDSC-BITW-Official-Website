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


  // <>
  // <meta name="viewport" content="initial-scale=1, width=device-width" />
  // <>
  // {/* <div className="evntpage">
  //   <strong className="blueclr">E</strong>
  //   <strong className="redclr"> V</strong>
  //   <strong className="yellowclr"> E</strong>
  //   <strong className="greenclr"> N</strong>
  //   <strong className="blueclr"> T</strong>
  //   <strong className="redclr"> S</strong>
  // </div>
  //   <div>
  //     <p className="evntpara">
  //       Hackathons? Study-Jams? Competitive Programming? You got it.<span><br></br></span>
  //       Here at GDSC-BITW, We encourage it all.We believe one can <span><br></br></span>
  //       develop faster within a group, and this is all what we want.<span><br></br></span>
  //       We are open for collaborations and look forward to work with<span><br></br></span>
  //       you.<span><br></br></span>
  //       Scroll down to know more.
  //     </p>
  //   </div> */}
  //   <div className="session">
  //     <strong className="blueclr"> S</strong>
  //     <strong className="redclr"> E</strong>
  //     <strong className="yellowclr"> S</strong>
  //     <strong className="greenclr"> S</strong>
  //     <strong className="blueclr"> I</strong>
  //     <strong className="redclr"> O</strong>
  //     <strong className="yellowclr"> N</strong>
  //     <strong className="greenclr"> S</strong>
  //   </div>
  //   <div>
  //     <p className="sessionpara">
  //       Any upcoming or ongoing events will appear here.<span><br></br></span>
  //       Keep an eye out on this page<span><br></br></span>
  //       <strong className="or">OR</strong><span><br></br></span>
  //       You can send a proposal for an event.<span><br></br></span>
  //       Check the proposals  to know more
  //     </p>
  //   </div>
  //   <div className="proposalpage">
  //     <strong className="send">SEND </strong>
  //     <strong className="proposal">PROPOSAL</strong>  
  //   </div>
  //      <p className="para2">
  //       Submit the form below to send a proposal to Us!
  //     </p>
  //    <form method="post" action="mailto:gdsc.bitw@gmail.com" className="form">
  //      First Name: <span><br></br></span><input className="box1" type="text" name="First Name"></input><span><br></br></span><span><br></br></span>
  //      Last Name: <span><br></br></span><input className="box2" type="text" name="Last Name"></input><span><br></br></span><span><br></br></span>
  //      Email ID: <span><br></br></span><input className="box3" type="email" name="Email"></input><span><br></br></span><span><br></br></span>
  //      Tell Us about Yourself:<span><br></br></span> <input className="box4" type="text" name="About Yourself"></input><span><br></br></span>
  //      <input className="submit" type="submit" value="Submit"></input>
  //    </form>
  //   <div style={{ height: '290vh' }}></div></></>
  )
}
export default Events
