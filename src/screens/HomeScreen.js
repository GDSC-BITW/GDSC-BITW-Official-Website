import React from 'react'
import {Grid, Typography, Button, Item} from '@material-ui/core/';
import useStyles from '../commonStyles'
import Background from '../components/bg/Background'
import FallingCircle from '../components/bg/FallingCircle'

const HomeScreen = () => {
  const classes = useStyles()

  return(
    <>
      <Background />
      <FallingCircle />
      <Grid container className="hero" direction="column" justifyContent="center" alignItems="center">
        <Grid lg={8} xl={8} md={8} sm={12} xsm={12} >
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

      <div class="jsx-1703132234 row">
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-yellow"></div>
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-blue"></div>
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-red"></div>
        <div style={{height:'15px',width:'25%',padding:0,marginLeft:0,marginRight:0,display:'flex' }}class="jsx-1703132234 bg-green"></div>
      </div>

      <Grid container spacing={5} className="sec-section" justifyContent="space-around">
        <Grid item sm={12} xsm={12} lg={6} xlg={8} >
          <strong className="heading blue">OPPORTUNITIES</strong>
          <strong className="heading red"> GDSC</strong>
          <strong className="heading yellow">  PROVIDES</strong>
          <strong className="heading green"> STUDENT</strong>
          <ul className="section-list">
            <li >
            <p className="desc" >Meet other students on campus interested in developer technologies. All are welcome, including those with diverse backgrounds and different majors.</p>
            </li>
            <li>
            <p className="desc" >Apply your new learnings and connections to build great solutions for local problems. Advance your skills, career and network.</p>
            </li>
          </ul>
          <Button variant="contained" color="primary" className={classes.btn}>
           Interested ?
          </Button>
        </Grid>
        <Grid item sm={12} xsm={12} lg={4} xlg={4} >
          <img src="../images/hero.png" alt="" className="hero-img" />
        </Grid>
      </Grid>

      <Grid container spacing={0} className="third-section" justifyContent="space-around">
        <Grid item sm={12} xsm={12} lg={4} xlg={4} >
          <img src="../images/team.png" alt="aa" className="hero-img" />
        </Grid>
        <Grid item sm={12} xsm={12} lg={6} xlg={8} >
          <strong className="heading blue">OPPORTUNITIES</strong>
          <strong className="heading red"> GDSC</strong>
          <strong className="heading yellow">  PROVIDES</strong>
          <strong className="heading green"> STUDENT</strong>
          <p className="desc section-decription" >Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.</p>
          <Button variant="contained" color="primary" className={classes.btn}>
           Our Team
          </Button>
        </Grid>
      </Grid>

    </>
    )
}

export default HomeScreen
