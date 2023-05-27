import React from 'react'
import '../styles/home.css';
import { useNavigate } from 'react-router-dom';
import Background from '../images/background.jpg';
import Nav from '../components/Nav.js';
// import About from './About';
import Footer from '../components/Footer'

function Home() {
  let navigate = useNavigate();

  return (
    <div>

        <Nav/>
        <div className='title'>
          <h1>Home</h1>
          
        </div>
        <div className='sub-title'>
          <h2>Suhbah Collective Presents: MN Muslims</h2>
        </div>
        <div className='small-title'>
          <h3>Your digital source for Minnesota Ummah</h3>
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
        <br/>
        <Footer/>

    </div>
)
}

export default Home