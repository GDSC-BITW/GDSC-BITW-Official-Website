import logo from './logo.png';
import img from './events.png';
import './App.css';


function App() {
  return (
    <><><div className="App">
      <img src={logo} className="logo"></img>
      <img src={img} className="evnt"></img>
    </div>
      <div className="navbar">
        <a className="home" href="www.google.com">HOME</a>
        <a className="team" href="www.google.com">TEAMS</a>
        <a className="contact" href="www.google.com">CONTACT</a>
        <button className="butn">JOIN US</button>
      

      </div></>
      
      <body>

        
        <div className="events">
          <p>
          EVENTS
          </p>       
        </div>
        <p className="topic">
          Here at GDSC BITW we strive to make the world a better place.<span><br></br></span>
          Our moto is to use the skills in a fun way to inspire young minds,<span><br></br></span>
          help them overcome various tasks, while helping them learn. So we<span><br></br></span>
          host various events to make learning fun and enjoyable.<span><br></br></span>
        </p>

        <div className="nextpage">
        <p className="sendp">Send Proposal!</p>
          <p className="propo">
            Learn together! You can send proposals to organise/ take part in various Events/ Study Jams/ <span><br></br></span>
            Hackathons.
            Click the button below to send a proposal to us!
            <button className="butn2">SEND PROPOSAL</button>
          </p>
          

        </div>
        
   
        </body></>
        
      
    
  );
}

export default App;
