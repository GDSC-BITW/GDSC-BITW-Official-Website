import React from "react";
import "./Profile.css";
import {Grid, Typography, Button, Item, Box, Container, Paper} from '@material-ui/core/';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const Profile = (props) => {

    return (<>

      <Grid container className="profile-card" alignItems="center" direction="row">
          <div className="avtar" style={{backgroundImage:`url(${props.image})`, backgroundColor:`${props.bgColor}`}}></div>
          <Grid item style={{marginLeft:"20px"}} >
              <span className="avtar-title desc">{props.name}</span> <br /><span className="avtar-post desc">{props.role}</span>
              <br /><br />
              <div className="icon-container">
                <LinkedInIcon fontSize="small" className="social"/>
                <GitHubIcon fontSize="small" className="social"/>
                <TwitterIcon fontSize="small" className="social"/>
              </div>

          </Grid>
      </Grid>

    </>);
}

export default Profile;
