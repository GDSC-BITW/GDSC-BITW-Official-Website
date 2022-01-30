import React from "react";
import Container from "@material-ui/core/Container";
import { Box, Grid, Link } from "@material-ui/core";
import LinkedIn from '@material-ui/icons/LinkedIn'
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter'
import YouTube from '@material-ui/icons/YouTube'

//This works
///CHanges Works
//Changing

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
              <LinkedIn className="social" style={{paddingRight:'9px'}}/>
            </Grid>
            <Grid item>
              <Instagram className="social" style={{paddingRight:'9px'}}/>
            </Grid>
            <Grid item>
              <Twitter className="social" style={{paddingRight:'9px'}}/>
            </Grid>
            <Grid item>
              <YouTube className="social" style={{paddingRight:'9px'}}/>
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
              <Link href="/" color="" className="socialLinks">
                Developers Student Club
              </Link>
            </Box>
            <Box>
              <Link href="/" color="" className="socialLinks">
                Winter of Code
              </Link>
            </Box>
            <Box>
              <Link href="/" color="" className="socialLinks">
                Google Developers Groups
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
              <Link href="/" color=""  className="socialLinks">
                Intro 2 ML
              </Link>
            </Box>
            <Box>
              <Link href="/" color=""  className="socialLinks">
                GDSC BITW YouTube Channel
              </Link>
            </Box>
            <Box>
              <Link href="/" color=""  className="socialLinks">
                30 Days of Google Cloud
              </Link>
            </Box>
            <Box>
              <Link href="/" color=""  className="socialLinks">
                GDSC BITW Instagram
              </Link>
            </Box>
            <Box>
              <Link href="/" color=""  className="socialLinks">
                GDSC BITW Discord
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
              <Link href="/" color=""  className="socialLinks">
                GDSC BITW GitHub
              </Link>
            </Box>
            <Box>
              <Link href="/" color=""  className="socialLinks">
                Winter Of Code GitHub
              </Link>
            </Box>
            <Box>
              <Link href="/" color=""  className="socialLinks">
                Google Developers
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
