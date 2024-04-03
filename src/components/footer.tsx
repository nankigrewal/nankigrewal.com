import * as React from 'react'
import linkedinIcon from '../images/linkedin.png';
import twitterIcon from '../images/twitter.png';
import instagramIcon from '../images/instagram.png';
import goodreadsIcon from '../images/goodreads.png';
import alltrailsIcon from '../images/alltrails.png';
import discordIcon from '../images/discord.png';


const Footer = () => {
  return (
    <div className="flex justify-center space-x-4 p-5 text-black">   
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "20px"}}>
            <a href="https://www.linkedin.com/in/nankigrewal" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} style={{width: "40px", height: "40px"}}/>
            </a>
            <a href="https://twitter.com/nankigrewal" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} style={{width: "40px", height: "40px"}}/>
            </a>
            <a href="https://www.instagram.com/nanki.grewal" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} style={{width: "40px", height: "40px"}}/>
            </a>
            <a href="https://www.goodreads.com/user/show/your-goodreads-id" target="_blank" rel="noopener noreferrer">
                <img src={goodreadsIcon} style={{width: "40px", height: "40px"}}/>
            </a>
            <a href="https://www.alltrails.com/members/your-alltrails-id" target="_blank" rel="noopener noreferrer">
                <img src={alltrailsIcon} style={{width: "40px", height: "40px"}}/>
            </a>
            <a href="https://discord.com/users/codergirl05" target="_blank" rel="noopener noreferrer">
                <img src={discordIcon} style={{width: "40px"}}/>
            </a>
        </div>
    </div>
  )
}

export default Footer

