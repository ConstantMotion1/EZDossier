import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function FinalPage() {
  return (
    <div>
      <div>
        <p className="lead">
          <h4>Constan Fernando,</h4>
          Fullstack Web Developer. College graduate with background in
          Biotechnology specifically microorganisms. Fast learner that can work
          well and under pressure. Good work ethic, consistent, and dependable.
        </p>
      </div>
      <div>
      <Carousel fade id="cssCarousel">
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src={Project1}
          alt="First slide"
        /> */}
        <Carousel.Caption>
          {/* <a href="https://iva416.github.io/MusicHub/">
            <img id="link" src={websitelinkin}/>
          </a>
          <a href="https://github.com/Iva416/MusicHub">
            <img id="link" src={githublinkin}/>
          </a> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src={Project2}
          alt="Second slide"
        /> */}
        <Carousel.Caption>
        {/* <a href="https://psychic-journey.herokuapp.com/">
            <img id="link" src={websitelinkin}/>
          </a>
          <a href="https://github.com/NathanKryz/psychic-journey">
            <img id="link" src={githublinkin}/>
          </a> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src={TechBlog}
          alt="Third slide"
        /> */}
        <Carousel.Caption>
        {/* <a href="https://blogapedia.herokuapp.com/">
            <img id="link" src={websitelink}/>
          </a>
          <a href="https://github.com/ConstantMotion1/Module14Challenge">
            <img id="link" src={githublink}/>
          </a> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src={PassGen}
          alt="Forth slide"
        /> */}
        <Carousel.Caption>
        {/* <a href="https://constantmotion1.github.io/Module3Challenge/">
            <img id="link" src={websitelink}/>
          </a>
          <a href="https://github.com/ConstantMotion1/Module3Challenge">
            <img id="link" src={githublink}/>
          </a> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src={WeatherApp}
          alt="Fifth slide"
        /> */}
        <Carousel.Caption>
        {/* <a href="https://constantmotion1.github.io/Module6Challenge/">
            <img id="link" src={websitelink}/>
          </a>
          <a href="https://github.com/ConstantMotion1/Module6Challenge">
            <img id="link" src={githublink}/>
          </a> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      <div>
      <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="name" placeholder="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={6} />
          </Form.Group>
          <Button variant="outline-dark">Submit</Button>
        </Form>
      </div>
      <div>
      <h3>Resume:</h3>
    <a href="#" download>Click to download</a>
      </div>
    </div>
  );
}
