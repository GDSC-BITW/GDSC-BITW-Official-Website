
import React from 'react'

const Events = (props) => {
  
return(
  
  
  <><meta name="viewport" content="initial-scale=1, width=device-width" />
  <><div className="evntpage">
    <strong className="blueclr">E</strong>
    <strong className="redclr"> V</strong>
    <strong className="yellowclr"> E</strong>
    <strong className="greenclr"> N</strong>
    <strong className="blueclr"> T</strong>
    <strong className="redclr"> S</strong>
  </div>
    <div>
      <p className="evntpara">
        Hackathons? Study-Jams? Competitive Programming? You got it.<span><br></br></span>
        Here at GDSC-BITW, We encourage it all.We believe one can <span><br></br></span>
        develop faster within a group, and this is all what we want.<span><br></br></span>
        We are open for collaborations and look forward to work with<span><br></br></span>
        you.<span><br></br></span>
        Scroll down to know more.
      </p>

    </div>
    


    <div className="session">
      <strong className="blueclr"> S</strong>
      <strong className="redclr"> E</strong>
      <strong className="yellowclr"> S</strong>
      <strong className="greenclr"> S</strong>
      <strong className="blueclr"> I</strong>
      <strong className="redclr"> O</strong>
      <strong className="yellowclr"> N</strong>
      <strong className="greenclr"> S</strong>

    </div>

    <div>
      <p className="sessionpara">
        Any upcoming or ongoing events will appear here.<span><br></br></span>
        Keep an eye out on this page<span><br></br></span>
        <strong className="or">OR</strong><span><br></br></span>
        You can send a proposal for an event.<span><br></br></span>
        Check the proposals  to know more
      </p>

    </div>
    <div className="proposalpage">
      <strong className="send">SEND </strong>
      <strong className="proposal">PROPOSAL</strong>
    
    </div>
       <p className="para2">
        Submit the form below to send a proposal to Us!
      </p>
     

     <form method="post" action="mailto:gdsc.bitw@gmail.com" className="form">
       First Name: <span><br></br></span><input className="box1" type="text" name="First Name"></input><span><br></br></span><span><br></br></span>
       Last Name: <span><br></br></span><input className="box2" type="text" name="Last Name"></input><span><br></br></span><span><br></br></span>
       Email ID: <span><br></br></span><input className="box3" type="email" name="Email"></input><span><br></br></span><span><br></br></span>
       Tell Us about Yourself:<span><br></br></span> <input className="box4" type="text" name="About Yourself"></input><span><br></br></span>
       <input className="submit" type="submit" value="Submit"></input>
     </form>
     






    <div style={{ height: '290vh' }}></div></></>
  )
}
export default Events
