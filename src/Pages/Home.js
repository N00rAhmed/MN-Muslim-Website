import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/home.css';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UseCarouselContext } from '../hooks/UseCarouselContext';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Background from '../images/background.jpg';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="arrow next" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="arrow prev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};

const Home = ({ carousel }) => {
  let navigate = useNavigate();
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://mnmuslims-api.onrender.com/api/carousel/')
      .then((response) => response.json())
      .then((data) => setCarouselData(data))
      .catch((error) => console.error(error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className='website'>
      {/* <Nav /> */}
      {/* <div className='title'>
        <h1>Home</h1>
      </div> */}
      
      <div className='sub-title'>
        <h2>Suhbah Collective Presents: MN Muslims</h2>
      </div>
      <div className='small-title'>
        <h3>Your digital source for Minnesota Ummah</h3>
      </div>

      {/* <h2>Announcements</h2> */}

      <div className="carousel-container">
        <Slider {...settings}>
          <div className='sentence'>
          {carouselData.map((slide, index) => (
            <div key={index} className='sentence'>
              <p>{slide.description1}</p>
            </div>
          ))}
          </div>
          <div className='sentence'>
          {carouselData.map((slide, index) => (
            <div key={index} className='sentence'>
              <p>{slide.description2}</p>
            </div>
          ))}
          </div>
          <div className='sentence'>
          {carouselData.map((slide, index) => (
            <div key={index} className='sentence'>
              <p>{slide.description3}</p>
            </div>
          ))}
          </div>
        </Slider>
      </div>

      
      <h3>About Us</h3>
      <p className='line'>Suhbah Collective’s goal is to promote the social, financial, and personal growth of its members and members of their community.</p>
      <div className='about-button'>
        <button onClick={() => navigate("/about")}>About</button>
      </div>
      <h1>Join today</h1>
      <p className='line'>Want to be part of this effort to create an online hub for the community? Then join us now.</p>
      <div className='join-button'>
        <button onClick={() => navigate("/contact")}>Join</button>
      </div>
      <br />
    </div>
  )
}

export default Home;
