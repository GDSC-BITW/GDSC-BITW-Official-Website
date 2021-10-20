import React from "react";
import "./Profile.css";
import {Grid, Typography, Button, Item, Box, Container, Paper} from '@material-ui/core/';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import "./eventcard.css";

const EventCard = () => {

  const upcomingEvents = [
    {date :"Oct 28, 2021 - 11:00 AM (IST)" , name:"Road to Google Cloud Certifications",venue:"Online",rsvp:"https://www.youtube.com/watch?v=_IyFdrIV_r0"},
  ]

    return (<>
      {
        upcomingEvents.map((data)=>{
          return(
            <Grid className="event-card" alignItems="center" direction="row" >
                      <Grid item style={{padding:"35px 30px",}} >
                          <div className="date">{data.date}</div>

                          <div className="event-name">{data.name}</div>
                    
                          <div className="event-venue">{data.venue}</div>
                          <a href={data.rsvp} className="see-more">
                            <strong>RSVP</strong>
                          </a>
                      </Grid>
            </Grid>
          )
        })
      }
      

    </>);
}

export default EventCard;
