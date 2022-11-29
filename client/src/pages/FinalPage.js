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
     <nav class="navbar">
        <h1 class="logo">{title}</h1>
        <ul class="nav-links-container">
            <li class="nav-link"><a href="#home-section" class="links active">home</a></li>
            <li class="nav-link"><a href="#project-section" class="links">projects</a></li>
            <li class="nav-link"><a href="#about-section" class="links">about</a></li>
            <li class="nav-link"><a href="#contact-section" class="links">contact</a></li>
        </ul>
        <div class="toggle-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
    <header class="header" id="home-section">
        <div class="content">
            <h1 class="header-heading">Welcome! I'm <span class="brand-name"/>{fullname}</h1>
            <a href="#" class="btn">{title}</a>
        </div>
        <div class="header-img-container">
            <div class="circle"></div>
            <img src={profile} class="header-img" alt=""/>
        </div>
    </header>
    <section id="about-section">
        <h1 class="heading">about me</h1>
        <div class="about-container">
            <div class="image-container">
                <div class="square"></div>
                <img src={coding} class="about-img" alt=""/>
                <div class="social-links">
                    <a href="#"><img src={github} class="social-img" alt=""/></a>
                    <a href="#"><img src={insta} class="social-img" alt=""/></a>
                    <a href="#"><img src={facebook} class="social-img" alt=""/></a>
                    <a href="#"><img src={twitter} class="social-img" alt=""/></a>
                    <a href="#"><img src={linkedin} class="social-img" alt=""/></a>
                </div>
            </div>
            <div class="info">
                <p>{description}</p>
                <a href="#" class="btn">hire me</a>
                <a href="#" class="btn">download CV</a>
            </div>
        </div>
    </section>
    <section id="project-section">
        <h1 class="heading">Projects</h1>

        <div class="filter">
            <button class="btn filter-btn active">all</button>
            <button class="btn filter-btn">css</button>
            <button class="btn filter-btn">javascript</button>
            <button class="btn filter-btn">fullstack</button>
        </div>
        <div class="project-container">
           <div class="project-card">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="img/close.png" class="close-btn" alt=""/>
                        <img src={project} class="project-img" alt=""/>
                        <span class="tags">#javascript, #css, #fullstack</span>
                    </div>

                    <div class="project-body">
                        <h1 class="project-name">project 1</h1>
                        <p class="project-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eum et veniam eos ratione accusantium aut, accusamus deserunt quis dolores.</p>
                        <a href="#" class="btn">github</a>
                        <a href="#" class="btn">see live</a>
                    </div>
                </div>
            </div> 
        </div>
    </section>
    <section id="contact-section">
        <h1 class="heading">contact</h1>
        <div class="form">
            <input type="text" placeholder="name"/>
            <input type="email" placeholder="email"/>
            <input type="text" placeholder="subject"/>
            <textarea placeholder="message"></textarea>
            <button class="contact-btn">contact</button>
        </div>
    </section>
    </>
  );
}
