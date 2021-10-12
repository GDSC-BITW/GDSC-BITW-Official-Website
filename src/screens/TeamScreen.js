import React from "react";
import {Grid} from '@material-ui/core/';
import { clubLead, coreTeam, mentor } from "../data/MemberData";
import Profile from '../components/Profile'
// import useStyles from '../commonStyles'


const TeamScreen = () => {
    // const classes = useStyles()
    return (<>

      <Grid container className="team-section" justifyContent="space-around" alignItems="center">
        <Grid item sm={12} xsm={12} lg={6} xlg={8} justifyContent="center" alignItems="center" >
          <strong className="heading blue">MEET</strong>
          <strong className="heading red"> OUR</strong>
          <strong className="heading yellow"> AMAZING</strong>
          <strong className="heading green"> TEAM</strong>
          <p className="desc section-decription" >Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.</p>

        </Grid>
        <Grid item sm={12} xsm={12} lg={4} xlg={4} justifyContent="center" alignItems="center" >
          <img src="../images/team1.jpeg" alt="aa" className="teamimg hero-img" />
        </Grid>
      </Grid>

      <div class="jsx-1703132234 row">
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-yellow"></div>
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-blue"></div>
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-red"></div>
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-green"></div>
      </div>

      {/* ============================================================= -- Second-Section -- ==================================================================== */}

      <div className="team-block" >

          {/* ================================================= -- Lead-Section -- ======================================== */}
          <Grid container className="second-section leadSection" justifyContent="start" spacing={7}>
              <Grid item md={10}><div className="title blue"><strong style={{fontSize:"1.6625rem"}}>CLUB LEAD</strong></div></Grid>
              {clubLead.map((user) => {
                  return (
                      <Grid item  md={4} lg={4} xlg={4} sm={12}md={6}><div className="profile-container"> <Profile name={user.Name} role={user.Post} bgColor={user.backGround} image={user.image}/></div></Grid>
                  );
              })}
          </Grid><br /><br /><br /><br />

          {/* ================================================= -- Core-Team-Section -- ======================================== */}


          <Grid container className="coreTeam" justifyContent="start" spacing={7}>
              <Grid item  md={10}><div className="title red"><strong style={{fontSize:"1.6625rem"}}>CORE TEAM</strong></div></Grid>
              {coreTeam.map((user) => {
                  return (
                      <Grid item  md={4} lg={4} xlg={4} sm={12}md={6}><div className="profile-container"> <Profile name={user.Name} role={user.Post} bgColor={user.backGround} image={user.image}/></div></Grid>
                  );
              })}
          </Grid><br /><br /><br /><br />

          {/* ================================================= -- Mentor-Section -- ======================================== */}

          <Grid container className="mentor" justifyContent="start" spacing={7}>
              <Grid item md={10}><div className="title green"><strong style={{fontSize:"1.6625rem"}}>MENTOR TEAM</strong></div></Grid>
              {mentor.map((user) => {
                  return (
                      <Grid item md={4} lg={4} xlg={4} sm={12}><div className="profile-container"> <Profile name={user.Name} role={user.Post} bgColor={user.backGround} image={user.image}/></div></Grid>
                  );
              })}
          </Grid>
        </div>
    </>);
}

export default TeamScreen;
