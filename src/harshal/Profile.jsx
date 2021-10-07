import React from "react";
import "./Profile.css";
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';

const Profile = (props) => {

    return (<>
        <Grid container className="profile-card" alignItems="center" >
            <Grid item className="avtar-container" >
                <div className="avtar" style={{ background: props.bgColor }}>
                    {/* <a><img className="avtar-img" src="/images/profile.png"></img></a> */}
                </div>
            </Grid>
            <Grid item>
                <div className="card-body">
                    <span className="avtar-title">{props.name}</span> <br /><span className="avtar-post"> {props.role} </span>
                    <br /><br />
                    <div className="icon-container">
                        <InsertLinkOutlinedIcon />
                        <LinkedInIcon style={{ color: "#0976b4" }} />
                        <GitHubIcon />
                        <TwitterIcon style={{ color: "#55acee" }} />
                        <FacebookIcon style={{ color: "#3b5998" }} />
                    </div>
                </div>
            </Grid>
        </Grid>
    </>);
}

export default Profile;