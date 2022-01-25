import React from 'react'
import './wow.css'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LanguageIcon from '@mui/icons-material/Language';

const Wow = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const days = () =>{
    var countDownDate = new Date("Feb 25, 2022 12:00:00").getTime();
    
    var now = new Date().getTime();

    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return(
        <strong>{days} days {hours} hours</strong>
    );

  };

  window.onload = function(e){
    handleClick(e);
  };
  
//   days();
    return(
        <div className="wow">
        <Button aria-describedby={id}  onClick={handleClick} >
            <Badge badgeContent={"new"} color="primary"
            anchorOrigin={{
                vertical: 'top', 
                horizontal: 'right',
            }}
            >
                <img style={{height: "100px", width:"100px"}} src="/wow.gif" alt="" />
            </Badge>
        </Button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
        >
            <div className='wow-card'>
                <img src="/wow_gif.gif" style={{height:"200px"}} alt="" />
                
                <Typography align="justify" variant="string" sx={{ p: 0 }}>GDSC (Wonder Of Wonders), aka GDSC WOW 2021 is a 3-day long virtual event 
                consisting of a 3 days of <strong> Speaker Sessions / Live Coding / Open Source Projects </strong> webinars covering various topics of latest 
                technologies and a <strong> Treasure Hunt </strong> game throughout the three days. <strong style={{color:"red"}}>“Treasure to WOW”</strong>. To us developers and tech enthusiasts, 
                this is much more than a few workshops, it is a place where imagination meets the technology of tomorrow.</Typography>
                <br/>   
                <br/>    
                <Typography align="left" variant="string" >
                     <p style={{ alignItems:"center"}}>February 25-27, 2022 | Online | <strong> {days()}</strong> to go.</p>   
                </Typography>
                
                <br/>   
                <br/>              
                <Button variant="outlined" href="https://gdscwow.tech/register" >
                    Register
                </Button>
                {/* <a className="wow-button" href="">
                   <strong> Register </strong>
                </a> */}
            </div>
            
        </Popover>
        </div>
        )
}
export default Wow;
