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
     <Container position="center" padding-left="20px">
      <Box padding="10px">
        <Container>
        <Grid container spacing={2} >
          <Grid item>
            <img
              src="/images/logo.png"
              style={{ height: "70px" }}
              alt="/"
            ></img>{" "}
          </Grid>
          <Grid item > <strong color="grey">GDSC</strong></Grid>
          <Grid item> <strong color="black"><bold>BITW</bold></strong></Grid>
        </Grid>
        </Container>
        <Container>
        <Grid container spacing={2}>
          <Grid item>
            <Link href="/">gdsc.bitw@gmail.com</Link>
          </Grid>
          <Grid item>
            <LinkedIn />
          </Grid>
          <Grid item>
            <Instagram />
          </Grid>
          <Grid item>
            <Twitter />
          </Grid>
          <Grid item>
            <YouTube />
          </Grid>
        </Grid>
        </Container>
        <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>
              <h2>
                <strong className="heading green">CONTENT</strong>
              </h2>
            </Box>
            <Box>
              <Link href="/" color="">
                Home
              </Link>
            </Box>
            <Box>
              <Link href="/" color="">
                Opportunities
              </Link>
            </Box>
            <Box>
              <Link href="/" color="">
                Partners
              </Link>
            </Box>
            <Box>
              <Link href="/" color="">
                Our Team
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>
            <h2>
                <strong className="heading green">ABOUT US</strong>
              </h2>
            </Box>
            <Box>
              <Link href="/" color="">
                BIT,wardha
              </Link>
            </Box>
            <Box>
              <Link href="/" color="">
                RSVP
              </Link>
            </Box>
          </Grid>
        </Grid>
        </Container>
      </Box>

        <Box textAlign="center" paddingBottom="10px">
        © Developers Student Club | Bajaj Institute Of Technology, Wardha. All Rights Reserved &reg; {new Date().getFullYear()}
        </Box>
        </Container>
    </Grid>
  );
};
export default Footer;
