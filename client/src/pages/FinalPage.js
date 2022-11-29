import React from "react";
import { QUERY_USER } from '../utils/queries';
import { useQuery } from "@apollo/client";
// import "../components/MinimalRender/style.css";
// import "../components/MinimalRender/script/script"





export default function FinalPage() {
  const { loading, data, error, refetch } = useQuery(QUERY_USER);
  refetch();
  console.log(data)
  const postData = data?.trait || {};
  console.log(postData)
  return (
    <>
     <nav className="navbar navbar-expand-lg fixed-top navbar-dark navbarScroll">
        <div className="container">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
  
    <section className="bgimage" id="home">
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                <h2 className="hero_title">Hi, my name is {postData.traits.fullName}</h2>
                <p className="hero_desc">I am a professional freelancer in New York City</p>
            </div>
            </div>
        </div>
    </section>


    <section id="about">
        <div className="container mt-4 pt-4">
            <h1 className="text-center">About Me</h1>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <img className= "imageAboutPage" alt=""/>
                </div>

                <div className="col-lg-8">
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        
                    </p>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <ul>
                                <li>Name: David Parker</li>
                                <li>Occupation: Web Developer</li>

                            </ul>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>
            </div>
            </div>
    </section>


   

   
    <section id="portfolio">
        <div className="container mt-3">
            <h1 className="text-center">Portfolio</h1>
            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card">
                        <img className="card-img-top" alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">YouTube Clone</h4>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="text-center">
                                <a href="#" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top"  alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">Quiz App</h4>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="text-center">
                                <a href="#" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top"  alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">Product Landing Page</h4>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="text-center">
                                <a href="#" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top"  alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">Messaging Service</h4>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="text-center">
                                <a href="#" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" alt="Card image"/>
                        <div className="card-body">
                            <h4 className="card-title">Twitter Clone</h4>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="text-center">
                                <a href="#" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">Blog App</h4>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="text-center">
                                <a href="#" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </section>


    <section id="contact">
        <div className="container mt-3 contactContent">
            <h1 className="text-center">Contact Me</h1>

            <div className="row mt-4">
                <div className="col-lg-6">
                   
            
                </div>

                <div className="col-lg-6">
                   
                    <form>
                        <input type="text" className="form-control form-control-lg" placeholder="Name"/>
                        <input type="email" className="form-control mt-3" placeholder="Email"/>
                        <input type="text" className="form-control mt-3" placeholder="Subject"/>
                        <div className="mb-3 mt-3">
                            <textarea className="form-control" rows="5" id="comment" name="text" placeholder="Project Details"></textarea>
                        </div>
                    </form>
                    <button type="button" className="btn btn-success mt-3">Contact Me</button>
                    
                </div>

            </div>
        
        </div>
    </section>

    <footer id="footer">
        <div className="container-fluid">
      
            <div className="social-icons mt-4">
                <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.twitch.tv/" target="_blank"><i className="fab fa-twitch"></i></a>
            </div>
        </div>
    </footer>
    </>
  );
}
