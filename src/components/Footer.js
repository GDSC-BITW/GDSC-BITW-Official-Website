import React from "react";
import Container from "@material-ui/core/Container";
import { Box, Grid, Link } from "@material-ui/core";
import LinkedIn from '@material-ui/icons/LinkedIn'
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter'
import YouTube from '@material-ui/icons/YouTube'

//This works//


const Footer = (props) => {
  return (
    <Grid style={{marginTop:"50px"}}>

        <Container>

        <hr style={{ marginBottom:'15px'}} />
        <Grid container style={{ marginBottom:'15px'}}>

          <Grid container direction="row">
          <Grid item>
            <p className="desc " style={{marginRight:'20px'}}>Follow Us On : </p>
          </Grid>
            <Grid item>
              < LinkedIn  className="social" onClick={ event => window.location.href='https://www.linkedin.com/company/gdsc-bitw' }  style={{paddingRight:'9px'}} />
            </Grid>
            <Grid item>
              <Instagram className="social" onClick={ event => window.location.href="https://instagram.com/gdsc.bitw?utm_medium=copy_link" } style={{paddingRight:'9px'}}/>
            </Grid>
            <Grid item>
              <Twitter className="social" onClick={ event => window.location.href="https://twitter.com/GDSCBITW?t=AIvdSYq_pYYZ0b1KqeNEsA&s=09" }style={{paddingRight:'9px'}}/>
            </Grid>
            <Grid item>
              <YouTube className="social"onClick={ event => window.location.href="https://youtube.com/channel/UCgs5hQK1kiKSacIDLnwp27A" }  style={{paddingRight:'9px'}}/>
            </Grid>
        </Grid>
        </Grid>
        <hr />
        </Container>
        <Container >
        <Grid container>
          <Grid item xs={12} sm={4} style={{marginTop:"30px"}}>
            <Box>
              <h2>
                <strong style={{fontSize:"1.3625rem"}} className="heading green">ABOUT</strong>
              </h2>
            </Box>
            <Box>
              <Link href="https://bitwardha.ac.in/" color="" className="socialLinks">
                Bajaj Institute Of Technology
              </Link>
            </Box>
            <Box>
              <Link href="https://developers.google.com/community/gdsc/" color="" className="socialLinks">
                Developers Student Club
              </Link>
            </Box>
            <Box>
              <Link href="https://gdg.community.dev//" color="" className="socialLinks">
                Google Developers Groups
              </Link>
            </Box>
            <Box>
              <Link href="https://youtube.com/channel/UCgs5hQK1kiKSacIDLnwp27A" color=""  className="socialLinks">
                GDSC BITW YouTube Channel
              </Link>
            </Box>
            <Box>
              <Link href="https://instagram.com/gdsc.bitw?utm_medium=copy_link" color=""  className="socialLinks">
                GDSC BITW Instagram
              </Link>
            </Box>
            <Box>
              <Link href="https://s.gdscbitw.study/Discord" color=""  className="socialLinks">
                GDSC BITW Discord
              </Link>
            </Box>

          </Grid>
          <Grid item xs={12} sm={4} style={{marginTop:"30px"}}>
            <Box>
            <h2>
                <strong style={{fontSize:"1.6625rem"}} className="heading blue">RESOURCES</strong>
              </h2>
            </Box>
            <Box>
              <Link href="https://events.withgoogle.com/30daysofgooglecloud/program-syllabus/#content" color=""  className="socialLinks">
                30 Days of Google Cloud
              </Link>
            </Box>
            <Box>
              <Link href="https://devlibrary.withgoogle.com/" color=""  className="socialLinks">
              Google Dev Library
              </Link>
            </Box>
            <Box>
              <Link href="https://developer.android.com/courses/android-basics-kotlin/course" color=""  className="socialLinks">
              Android Basics in Kotlin
              </Link>
            </Box>
            <Box>
              <Link href="https://grow.google/intl/en_in/learn-skills/" color=""  className="socialLinks">
              Grow with Google
              </Link>
            </Box>
            
          </Grid>

          <Grid item xs={12} sm={4} style={{marginTop:"30px"}}>
            <Box>
            <h2>
                <strong style={{fontSize:"1.6625rem"}} className="heading red">DEVELOPERS CONSOLE</strong>
              </h2>
            </Box>
            <Box>
              <Link href="https://console.developers.google.com/" color=""  className="socialLinks">
                Google API Console
              </Link>
            </Box>
            <Box>
            <Link href="https://console.cloud.google.com/" color=""  className="socialLinks">
                Google Cloud Platform Console
              </Link>
            </Box>
            <Box>
            <Link href="https://play.google.com/apps/publish" color=""  className="socialLinks">
                Google Play Console
              </Link>
            </Box>
            <Box>
              <Link href="https://console.firebase.google.com/" color=""  className="socialLinks">
                Firebase Console
              </Link>
            </Box>
            <Box>
              <Link href="https://console.actions.google.com/" color=""  className="socialLinks">
                Actions on Google Console
              </Link>
            </Box>
            <Box>
              <Link href="https://cast.google.com/publish" color=""  className="socialLinks">
                Cast SDK Developer Console
              </Link>
            </Box>
            <Box>
              <Link href="https://chrome.google.com/webstore/developer/dashboard" color=""  className="socialLinks">
                Chrome Web Store Dashboard
                </Link>
            </Box>
          </Grid>
        </Grid>
        <hr style={{marginTop:"40px"}}/>

        <Grid container textAlign="center" alignItems="center"  style={{marginTop:'20px', marginBottom:'20px'}}>
        <p className="desc" style={{fontSize:'1.6rem', marginLeft:'60px'}}>GDSC BITW</p>
        <p className="desc" style={{fontSize:'1.1rem', marginLeft:'60px'}}>Code Of Conduct</p>
        <p className="desc" style={{fontSize:'1.1rem', marginLeft:'60px'}}>{new Date().getFullYear()}</p>
        </Grid>
        </Container>

    </Grid>
  );
};
export default Footer;
