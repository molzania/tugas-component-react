import React from 'react';
import './Home.css';
import {Carousel} from 'react-bootstrap';

function Home() {
 

    return (
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/pink.jpg"
          alt="gambar-1"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/pink2.jpg"
          alt="gambar-2"
        />
    
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/pink3.jpg"
          alt="gambar-3"
        />
    
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
  
  export default Home;