import React from 'react'
import {Grid, Typography, Button, Item} from '@material-ui/core/';
import useStyles from '../commonStyles'
import Background from '../components/bg/Background'
import {NavLink, Link } from "react-router-dom";
import FallingCircle from '../components/bg/FallingCircle'

const HomeScreen = () => {
  const classes = useStyles()

  return(
    <>
      <Background />
      <FallingCircle />

      <Grid container className="hero" direction="column" justifyContent="center" alignItems="center" style={{paddingTop:"10vh"}}>
        <Grid lg={8} xl={8} md={8} sm={12} xsm={12} justifyContent="center" alignItems="center">
          <div>
            <strong className="heading blue">Google  </strong>
            <strong className="heading red"> Developer   </strong>
            <strong className="heading yellow">  Student  </strong>
            <strong className="heading green"> Club </strong>
            <br/>
            Bajaj Institute of Technology, Wardha
          </div>
          <br/>
           Google Developer Student Clubs (GDSC) are community groups for college and university students interested in
           Google developer technologies. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build
           solutions for local businesses and their community.
           <br/>
          <Button variant="contained" color="primary" className={classes.btn}>
           Learn More
          </Button>
        </Grid>

      </Grid>

      <div class="jsx-1703132234 row homeline" >
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-yellow"></div>
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-blue"></div>
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-red"></div>
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-green"></div>
      </div>

      <Grid container spacing={5} className="sec-section" justifyContent="center">
        <Grid item sm={12} xsm={12} lg={6} xlg={8} >
          <strong className="heading blue">OPPORTUNITIES</strong>
          <strong className="heading red"> GDSC</strong>
          <strong className="heading yellow">  PROVIDES</strong>
          <strong className="heading green"> STUDENT</strong>
            <p className="desc" >Meet other students on campus interested in developer technologies. All are welcome, including those with diverse backgrounds and different majors.</p>
            <br/>
            <p className="desc" >Apply your new learnings and connections to build great solutions for local problems. Advance your skills, career and network.</p>
          <Button variant="contained" color="primary" className={classes.btn}>
           Interested ?
          </Button>
        </Grid>
        <Grid item sm={12} xsm={12} lg={4} xlg={4} justifyContent="center" alignItems="center">
          <img src="../images/asset1.png" alt="" className="hero-img" />

        </Grid>
      </Grid>

      <Grid container direction="column" className="community" justifyContent="center" alignItems="center">
        <Grid  >
          <strong className="heading blue">COMMUNITY</strong>
          <strong className="heading red"> PARTNERS</strong>
        </Grid>
        <Grid lg={10} md={10} sm={12} style={{marginTop:'35px', marginBottom:'40px'}}>
          <img src="/images/CESPITOSE.png" alt="" className="community-logo"/>
          <img src="/images/FinFlee.png" alt="" className="community-logo finflee-logo" />
          <img src="/images/ABC.png" alt="" className="community-logo"/>
        </Grid>
      </Grid>

      <Grid container spacing={5} className="third-section" justifyContent="center" alignItems="center">
        <Grid item sm={12} xsm={12} lg={4} xlg={4} justifyContent="center" alignItems="center" >
          <img src="../images/asset2.png" alt="aa" className="hero-img" />
        </Grid>
        <Grid item sm={12} xsm={12} lg={6} xlg={8} justifyContent="center" alignItems="center" >
          <strong className="heading blue">MEET</strong>
          <strong className="heading red"> OUR</strong>
          <strong className="heading yellow"> AMAZING</strong>
          <strong className="heading green"> TEAM</strong>
          <p className="desc section-decription" >Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.</p>
          <Button variant="contained" color="primary" className={classes.btn}>
            <Link to="/team" style={{textDecoration:'none', color:'white'}}>
             Our Team
            </Link>
          </Button>
        </Grid>
      </Grid>

    </>
    )
}

export default HomeScreen
