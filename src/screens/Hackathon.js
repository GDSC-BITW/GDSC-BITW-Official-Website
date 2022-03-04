import React from 'react'
import { Grid, Typography, Button, Item } from '@material-ui/core/';
import useStyles from '../commonStyles'
import Background from '../components/bg/Background'
import { NavLink, Link } from "react-router-dom";
import FallingCircle from '../components/bg/FallingCircle'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fontWeight, width } from '@mui/system';


const HackathonScreen = () => {
    const classes = useStyles()

    return (
        <>
            <Navbar />

            <Grid container className="hero" justifyContent="center" alignItems="center" style={{ paddingTop: "10vh" }}>
                <Grid lg={8} xl={8} md={8} sm={12} xsm={12} justifyContent="center" className='hack-hero' alignItems="center">
                    <Grid >
                        <strong className="heading blue">Google  </strong>
                        <strong className="heading red"> Developer   </strong>
                        <strong className="heading yellow">  Student  </strong>
                        <strong className="heading green"> Club </strong>
                        <br />
                        <p className="center"><strong >Bajaj Institute of Technology, Wardha</strong></p>
                    </Grid>
                    <Grid>
                        <p className='heading-4 collab center'>In Collabration with</p>
                    </Grid>
                    <Grid>
                        <p className=" center"><strong className='heading-2'>Computer Engineering Department </strong></p>
                    </Grid>
                    <div className="blueLine "></div>
                    <Grid>
                        <p className="center heading-3 "><strong >Smart-O-Thon (Internal Hackathon)</strong></p>
                        <p className="center heading-3 "><strong >23 - 25 Feb</strong></p>

                    </Grid>
                </Grid>

            </Grid>

            <Grid container spacing={5} className="third-section" justifyContent="center" alignItems="center" style={{ marginLeft: "50px" }}>
                <Grid item sm={12} xsm={12} lg={4} xlg={4} justifyContent="center" alignItems="center" >
                    <img src="../images/asset-3.jpg" alt="aa" className="hero-img" />
                </Grid>
                <Grid item sm={12} xsm={12} lg={6} xlg={8} justifyContent="center" alignItems="center" style={{ marginLeft: "20px" }}>
                    <strong className="heading blue">ABOUT</strong>
                    <p style={{ marginTop: '-25px' }} ><strong className="heading "> <span className='red'>SMART</span> <span className='yellow'>-O-</span> <span className='green'>THON</span></strong></p>

                    <p className="desc section-decription" >Participants will be given a list of domains from which
                        they must choose one and come up with a solution to
                        an issue in that domain. They will be given a time limit
                        of <span className='red'> <strong style={{ fontSize: '18px' }}>36 hours</strong> </span>  to finish this work, they do not need to
                        code or come up with the technical part, instead, they
                        may present their concept using a powerpoint presentation. It's up
                        to them if they want to code and come up with the
                        technical aspects as well.</p>
                </Grid>
            </Grid>

            <Grid container spacing={5} className="sec-section" justifyContent="center" alignItems="center" >
                <Grid item sm={12} xsm={12} lg={6} xlg={8} justifyContent="center" alignItems="center" >
                    <strong className="heading blue">WHY  </strong>
                    <strong className="heading red"> JOIN  </strong>
                    <strong className="heading yellow">  US  </strong>
                    <strong className="heading green"> ? </strong>

                    <p className="desc " >A hackathon is a competition and a social event that
                        brings computer programmers and other interested
                        people together to think of innovative solutions to real-world problems provided by different sectors of the
                        Indian Government to improve upon or build a new
                        software program.
                    </p>
                    <p className="desc " >Those participating in a hackathon will work with like-minded individuals to utilize new technologies and hack
                        together tons of solutions from different sources to
                        achieve the goal.
                    </p>

                </Grid>
                <Grid item sm={12} xsm={12} lg={4} xlg={4} justifyContent="center" alignItems="center"
                    style={{ marginLeft: '-40px' }} >
                    <img src="../images/asset-4.png" alt="aa" className="hero-img" />
                </Grid>
            </Grid>

            <Grid container spacing={5} className="section-center">
                <Grid lg={12} style={{ margin: '50px 0px' }} >
                    <p className='center'><strong className='heading blue' style={{ marginLeft: '-80px' }} >DOMAINS</strong></p>
                </Grid>
                <Grid item className='desc' lg={3}>Disaster Managment</Grid>
                <Grid item className='desc' lg={3}>MedTech / BioTech / HealthTech</Grid>
                <Grid item className='desc' lg={3}>Blockchain & Cybersecurity</Grid>
                <Grid item className='desc' lg={3}>Smart Vehicles</Grid>
                <Grid item className='desc' lg={3}>Smart Automation</Grid>
                <Grid item className='desc' lg={3}>Smart Education</Grid>
                <Grid item className='desc' lg={3}>Transportation & Logistics</Grid>
                <Grid item className='desc' lg={3}>Heritage & Culture</Grid>
                <Grid item className='desc' lg={3}>Agriculture, FoodTech & Rural
                    Development</Grid>


            </Grid>

            <Grid container spacing={5} className="section-center" style={{transform:'translate(-47%,0%)'}} >
                <Grid lg={12} style={{ margin: '50px 0px'}} >
                    <p className='center'>  
                        <strong className="heading blue">GLIMPSES  </strong>
                        <strong className="heading red"> OF   </strong>
                        <strong className="heading yellow">  LAST  </strong>
                        <strong className="heading green"> YEAR </strong></p>
                </Grid>
                <Grid item className='desc' lg={4}> <div className='glimpse-img' style={{ backgroundImage:'url(../images/Hackathon/3.JPG)' }}></div> </Grid>
                <Grid item className='desc' lg={4}> <div className='glimpse-img' style={{ backgroundImage:'url(../images/Hackathon/4.JPG)' }}></div> </Grid>
                <Grid item className='desc' lg={4}> <div className='glimpse-img' style={{ backgroundImage:'url(../images/Hackathon/5.JPG)' }}></div> </Grid>
                <Grid item className='desc' lg={4}> <div className='glimpse-img' style={{ backgroundImage:'url(../images/Hackathon/6.JPG)' }}></div> </Grid>
                <Grid item className='desc' lg={4}> <div className='glimpse-img' style={{ backgroundImage:'url(../images/Hackathon/7.JPG)' }}></div> </Grid>
                <Grid item className='desc' lg={4}> <div className='glimpse-img' style={{ backgroundImage:'url(../images/Hackathon/8.JPG)' }}></div> </Grid>
                <Grid item className='desc' lg={4}> <div className='glimpse-img' style={{ backgroundImage:'url(../images/Hackathon/9.JPG)' }}></div> </Grid>
               


            </Grid>

            <Grid container spacing={5} className="section-center" style={{transform:'translate(-49%,0%)' ,  margin: '50px 0px'}} >
                <Grid lg={12} style={{ margin: '50px 0px'}} >
                    <p className='center'>  
                        <strong className="heading blue"> DEPARTMENT COORDINATORS </strong></p>
                </Grid>
                <Grid item className='desc' lg={6}>
                    <p className="heading-2 center">Civil Engineering</p>
                    <p className='center haeding-2'>Dr. Harshad Phadke</p>
                </Grid>
                <Grid item className='desc' lg={6}>
                    <p className="heading-2 center">Computer Engineering </p>
                    <p className='center haeding-2'>Mr. Sandesh Jain</p>
                </Grid>
                <Grid item className='desc' lg={6}>
                    <p className="heading-2 center">Electrical Engineering 
</p>
                    <p className='center haeding-2'>Dr. Jayesh Ruikar</p>
                </Grid>
                <Grid item className='desc' lg={6}>
                    <p className="heading-2 center">Mechanical Engineering</p>
                    <p className='center haeding-2'>Dr. Pawan Chandak</p>
                </Grid>
               

            </Grid>


            <div style={{ bottom: 0 }}><Footer /></div>


        </>
    )

}

export default HackathonScreen;
