import "./FooterStyles.css"

import React from 'react';

import {FaGithub, FaHome, FaLinkedin, FaMailBulk,} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                    <div> 
                        <p>Toronto, Canada</p>
                        
                    </div>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                    shayne_karuna@hotmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>Work with me</h4>
                <p>I enjoy discussing new projects and design challenges.</p>
                <div className="social">
                    <a href="https://github.com/ShayneKaruna">
                <FaGithub size={30} style={{ color: "white", marginRight: "1rem" }} />
                </a>
                <a href="https://www.linkedin.com/in/shayne-karunakaran-web-dev/">
                <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer