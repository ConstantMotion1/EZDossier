import React, { useEffect } from "react";
import { QUERY_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";
import '../components/Elaborate/app';
import '../components/Elaborate/project';
import '../components/Elaborate/style.css';
import github from '../components/Elaborate/img/github.png';
import insta from '../components/Elaborate/img/insta.png';
import facebook from '../components/Elaborate/img/fb.png';
import twitter from '../components/Elaborate/img/twitter.png';
import linkedin from '../components/Elaborate/img/linked.png';
import project from '../components/Elaborate/img/project-7.png';
import coding from '../components/Elaborate/img/coding.png';
import profile from '../components/Elaborate/img/pic2.jpg';


export default function FinalPage() {
  const { loading, data } = useQuery(QUERY_USER);
  console.log("here");
  useEffect(() => {
    console.log(loading);
    if (data) {
      console.log(data);
    }
  }, [data]);

  const postData = data?.me.traits[0] || {};
  const fullname =  postData.fullName;
  const description = postData.description;
  const title = postData.title;
  return (
    <>
     <nav className="navbar">
        <h1 className="logo">{title}</h1>
        <ul className="nav-links-container">
            <li className="nav-link"><a href="#home-section" className="links active">home</a></li>
            <li className="nav-link"><a href="#project-section" className="links">projects</a></li>
            <li className="nav-link"><a href="#about-section" className="links">about</a></li>
            <li className="nav-link"><a href="#contact-section" className="links">contact</a></li>
        </ul>
        <div className="toggle-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
    <header className="header" id="home-section">
        <div className="content">
            <h1 className="header-heading">Welcome! I'm <span className="brand-name"/>{fullname}</h1>
            <a href="#" className="btn">{title}</a>
        </div>
        <div className="header-img-container">
            <div className="circle"></div>
            <img src={profile} className="header-img" alt=""/>
        </div>
    </header>
    <section id="about-section">
        <h1 className="heading">about me</h1>
        <div className="about-container">
            <div className="image-container">
                <div className="square"></div>
                <img src={coding} className="about-img" alt=""/>
                <div className="social-links">
                    <a href="#"><img src={github} className="social-img" alt=""/></a>
                    <a href="#"><img src={insta} className="social-img" alt=""/></a>
                    <a href="#"><img src={facebook} className="social-img" alt=""/></a>
                    <a href="#"><img src={twitter} className="social-img" alt=""/></a>
                    <a href="#"><img src={linkedin} className="social-img" alt=""/></a>
                </div>
            </div>
            <div className="info">
                <p>{description}</p>
                <a href="#" className="btn">hire me</a>
                <a href="#" className="btn">download CV</a>
            </div>
        </div>
    </section>
    <section id="project-section">
        <h1 className="heading">Projects</h1>

        <div className="filter">
            <button className="btn filter-btn active">all</button>
            <button className="btn filter-btn">css</button>
            <button className="btn filter-btn">javascript</button>
            <button className="btn filter-btn">fullstack</button>
        </div>
        <div className="project-container">
           <div className="project-card">
                <div className="project-wrapper">
                    <div className="project-thumbnail">
                        <img src="img/close.png" className="close-btn" alt=""/>
                        <img src={project} className="project-img" alt=""/>
                        <span className="tags">#javascript, #css, #fullstack</span>
                    </div>

                    <div className="project-body">
                        <h1 className="project-name">project 1</h1>
                        <p className="project-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eum et veniam eos ratione accusantium aut, accusamus deserunt quis dolores.</p>
                        <a href="#" className="btn">github</a>
                        <a href="#" className="btn">see live</a>
                    </div>
                </div>
            </div> 
        </div>
    </section>
    <section id="contact-section">
        <h1 className="heading">contact</h1>
        <div className="form">
            <input type="text" placeholder="name"/>
            <input type="email" placeholder="email"/>
            <input type="text" placeholder="subject"/>
            <textarea placeholder="message"></textarea>
            <button className="contact-btn">contact</button>
        </div>
    </section>
    </>
  );
}
