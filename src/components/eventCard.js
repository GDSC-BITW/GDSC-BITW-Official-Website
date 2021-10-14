import React from "react";
import "./Profile.css";
import {Grid, Typography, Button, Item, Box, Container, Paper} from '@material-ui/core/';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const eventCard = () => {

    return (<>

      <Grid container className="profile-card" alignItems="center" direction="row">
          <Grid item style={{marginLeft:"20px"}} >
              <span className="avtar-title desc"></span> Hello<br /><span className="avtar-post desc">Name</span>
              <br /><br />
              <div className="icon-container">
                Nikhil Tidke
              </div>

          </Grid>
      </Grid>

    </>);
}

export default eventCard;
