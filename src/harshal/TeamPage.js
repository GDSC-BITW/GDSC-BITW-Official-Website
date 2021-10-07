import React from "react";
import "./TeamPage.css";
import { clubLead, coreTeam, mentor } from "../Data/MemberData";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
import Profile from "./Profile";

const TeamPage = () => {

    return (<>
        {/* ================================================= -- Hero-Section -- ======================================== */}
        <Grid container className="heroSec" justifyContent="center">
            <Grid item md={7} className="content">

                <div className="leftContainer">
                    <div className=" headingContainer">
                        <strong className="heading"><span className="blue">MEET</span> <span className="red">OUR</span><br /> <span className="yellow">AMAZING</span> <span className="green">TEAM</span></strong>
                    </div><br /><br />
                    <div className="descContainer">
                        <p className="desc">At GDSC BITW we aspires to expand its student community of passionate and fervent developers to encapsulate the latest and advanced technologies such as cloud computing, machine learning, big data, web, and app development, etc. through their interactive and free workshops. </p>
                    </div>
                </div>
            </Grid>
            <Grid item md={5} className="rightContainer">
                <div className="imageContainer"><img className="heroImage" src="../images/9814.svg"></img></div>
            </Grid>
        </Grid><br />



        {/* ============================================================= -- Second-Section -- ==================================================================== */}

        <div className="second-section">

            {/* ================================================= -- Lead-Section -- ======================================== */}
            <Grid container className="second-section leadSection" justifyContent="start" spacing={7}>
                <Grid item md={10}><div className="title blue"><strong>CLUB LEAD</strong></div></Grid>
                {clubLead.map((user) => {
                    return (
                        <Grid item md={10}><div className="profile-container"> <Profile name={user.Name} role={user.Post} bgColor={user.backGround} /></div></Grid>
                    );
                })}
            </Grid><br /><br /><br /><br />

            {/* ================================================= -- Core-Team-Section -- ======================================== */}


            <Grid container className="coreTeam" justifyContent="start" spacing={7}>
                <Grid item md={10}><div className="title red"><strong>CORE TEAM</strong></div></Grid>
                {coreTeam.map((user) => {
                    return (
                        <Grid item md={6}><div className="profile-container"> <Profile name={user.Name} role={user.Post} bgColor={user.backGround} /></div></Grid>
                    );
                })}
            </Grid><br /><br /><br /><br />

            {/* ================================================= -- Mentor-Section -- ======================================== */}

            <Grid container className="mentor" justifyContent="start" spacing={7}>
                <Grid item md={10}><div className="title green"><strong>MENTOR TEAM</strong></div></Grid>
                {mentor.map((user) => {
                    return (
                        <Grid item md={6}><div className="profile-container"> <Profile name={user.Name} role={user.Post} bgColor={user.backGround} /></div></Grid>
                    );
                })}
            </Grid>
        </div>
    </>);
}

export default TeamPage;