import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import github from '../assets/linklogos/github.png';
import website from '../assets/linklogos/website.png';
import logo from '../assets/techblog.png';

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
      <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-90"
          src={logo}
          alt="First slide"
        />
        <Carousel.Caption>
          <a href="#">
            <img id="link" src={website}/>
          </a>
          <a href="#">
            <img id="link" src={github}/>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90"
          src={logo}
          alt="Second slide"
        />
        <Carousel.Caption>
        <a href="#">
            <img id="link" src={website}/>
          </a>
          <a href="#">
            <img id="link" src={github}/>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90"
          src={logo}
          alt="Third slide"
        />
        <Carousel.Caption>
        <a href="#">
            <img id="link" src={website}/>
          </a>
          <a href="#">
            <img id="link" src={github}/>
          </a>
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
