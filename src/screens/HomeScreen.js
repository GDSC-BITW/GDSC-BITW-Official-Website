import React from 'react'
import {Grid, Typography, Button} from '@material-ui/core/';
import useStyles from '../commonStyles'


const HomeScreen = () => {
  const classes = useStyles()

  return(
    <>
      <Grid style={{height:'100vh'}}>
        <div class="circles circle3"></div>
        <div class="circles circle1"></div>
        <div class="circles circle4"></div>
        <div class="circles circle2"></div>

          <Grid container className="hero" 
          direction="column"
          justifyContent="center"
          alignItems="center">
          <Grid lg={8} xl={8} md={8} sm={12} xsm={12} container >
          <Grid style={{marginBottom:15}}>
            <strong className="heading blue">Google  </strong>
            <strong className="heading red"> Developer   </strong>
            <strong className="heading yellow">  Student  </strong>
            <strong className="heading green"> Club </strong>
            <p className="desc" >Bajaj Institute of Technology, Wardha</p>
            </Grid>
            Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. ...
            By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
            <Button variant="contained" color="primary" className={classes.btn}>
            Learn More
            </Button>
            </Grid>
          </Grid>

          <Grid container style={{marginTop:'13rem'}} spacing={2} justifyContent="center"
          alignItems="center">
            <Grid item  lg={8} xlg={8} md={12} sm={12}>
              <strong className="heading blue">OPPORTUNITIES   </strong>
              <strong className="heading red"> GDSC    </strong>
              <strong className="heading yellow">  PROVIDES   </strong>
              <strong className="heading green"> STUDENT </strong>
              <p className="desc" >Meet other students on campus interested in developer technologies. All are welcome, including those with diverse backgrounds and different majors.</p>
            </Grid>
            <Grid item>image</Grid>

          </Grid>

        </Grid>
    </>
    )
}

export default HomeScreen
