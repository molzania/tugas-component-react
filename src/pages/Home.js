import React from 'react';
import './Home.css';
import {Carousel} from 'react-bootstrap';
import img1 from './pink.jpg';
import img2 from './pink2.jpg';
import img3 from './pink3.jpg';

function Home() {
 

    return (
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="gambar-1"
        />
        <Carousel.Caption className="carousel.caption">
          <h3>Selamat Datang</h3>
          <p>Ini adalah laman tugas pertemuan 16 Skilvul-JS Resilience Program</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="gambar-2"
        />
    
        <Carousel.Caption className="carousel-caption">
          <h3>Happy Watching</h3>
          <p>Kalian bisa melihat sejauh mana progress pengerjaan tugas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="gambar-3"
        />
    
        <Carousel.Caption className="carousel-caption">
          <h3>Belajar Web Development</h3>
          <p>Bagi saya nge'coding' itu menyenangkan</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
  
  export default Home;