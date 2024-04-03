import * as React from 'react'
import me from '../images/me.png';
import '../components/backgrounds.css';



const AboutMe = () => {
  return (
    <div className="AboutMe" style={{ minWidth: '1000px' }}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "50vh"}}>
            <div className="w-1/2 p-5">
                <h2 style={{fontSize: "3em", fontFamily: "Arial, sans-serif", marginBottom: "6px"}}>Hi, I'm Nanki.</h2>
                <p style={{marginTop: "10px"}}>
                Building cool things <a href="https://ecliptor.ai">@ Ecliptor</a>, as co-founder and CTO.
                </p>
                <p style={{marginTop: "10px"}}>
                I got my degree in EECS from the University of Michigan (GO BLUE!), where I concentrated in machine learning and AI, systems engineering, and product design. Before founding Ecliptor, I was at Twitch as an ML engineer on the Recommendations team.
                </p>
                <p style={{marginTop: "10px"}}>
                When I'm not coding, I'm hiking, camping in my tent, and saving new recipes on Pinterest that I'll never cook.
                </p>
            </div>
            <img src={me} alt="Nanki" style={{width: "400px", height: "400px", borderRadius: "40%"}} />
        
            <svg style={{marginTop: "10%", position: "absolute", zIndex: "-1", minWidth:"1000px", minHeight:"800px"}} viewBox="0 0 100 50">
                <defs>
                <pattern id="Wave"
                        x="0" y="0" width="100" height="50"
                        patternUnits="userSpaceOnUse" >
                        <path d="M0 25 0 6C20 9 38 11 55 7 72 4 87 4 100 6l0 19z" id="path4" fill="#FFDC30"/>
                        <path d="M0 25 0 44C30 41 48 39 65 43 82 46 97 46 100 44l0 -19z" id="path5" fill="#FFDC30"/>
                </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#Wave)" />
            </svg> 
        </div>
    </div>
  )
}

export default AboutMe
