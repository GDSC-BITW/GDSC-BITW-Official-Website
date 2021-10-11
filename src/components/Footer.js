import React from "react";
import Container from "@material-ui/core/Container";
import { Box, Grid, Link } from "@material-ui/core";
import LinkedIn from '@material-ui/icons/LinkedIn'
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter'
import YouTube from '@material-ui/icons/YouTube'

const Footer = (props) => {
  return (
    <Grid>
     <Container position="center" padding-left="20px" style={{overflowY:"hidden"}}>
      <Box>
        <Container>
        <Grid container alignItems="center">
          <Grid item>
            <img
              src="/images/logo.png"
              style={{ height: "60px" }}
              alt="/"
            ></img>{" "}
          </Grid>
          <Grid item > <strong color="grey">GDSC</strong></Grid>
          <Grid item> <strong color="black"><bold>BITW</bold></strong></Grid>
        </Grid>
        </Container>

        <Container>
        <Grid container style={{ marginBottom:'20px'}}>
          <Grid item style={{ marginBottom:'20px'}}>
            <Link href="/" style={{color:'black', marginBottom:'20px'}}>gdsc.bitw@gmail.com</Link>
          </Grid>
          <Grid container direction="row">
            <Grid item>
              <LinkedIn className="social" style={{paddingRight:'7px'}}/>
            </Grid>
            <Grid item>
              <Instagram className="social" style={{paddingRight:'7px'}}/>
            </Grid>
            <Grid item>
              <Twitter className="social" style={{paddingRight:'7px'}}/>
            </Grid>
            <Grid item>
              <YouTube className="social" style={{paddingRight:'7px'}}/>
            </Grid>
        </Grid>
        </Grid>
        </Container>
        <Container>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>
              <h2>
                <strong style={{fontSize:"1.6625rem"}} className="heading green">CONTENT</strong>
              </h2>
            </Box>
            <Box>
              <Link href="/" color="" style={{color:"black"}}>
                Home
              </Link>
            </Box>
            <Box>
              <Link href="/" color="" style={{color:"black"}}>
                Opportunities
              </Link>
            </Box>
            <Box>
              <Link href="/" color="" style={{color:"black"}}>
                Partners
              </Link>
            </Box>
            <Box>
              <Link href="/" color="" style={{color:"black"}}>
                Our Team
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>
            <h2>
                <strong style={{fontSize:"1.6625rem"}} className="heading yellow">ABOUT US</strong>
              </h2>
            </Box>
            <Box>
              <Link href="/" color="" style={{color:"black"}}>
                BIT,wardha
              </Link>
            </Box>
            <Box>
              <Link href="/" color="" style={{color:"black"}}>
                RSVP
              </Link>
            </Box>
          </Grid>
        </Grid>
        </Container>

      </Box>

        <Box textAlign="center" paddingBottom="10px" marginTop="30px" marginBottom="10px">
        © Developers Student Club | Bajaj Institute Of Technology, Wardha. All Rights Reserved &reg; {new Date().getFullYear()}
        </Box>
        </Container>

    </Grid>
  );
};
export default Footer;
