import React from 'react'
import Nav from '../components/Nav.js';
import '../styles/about.css';
import Footer from '../components/Footer'
import Suhbah from '../images/suhbah-collective-logo.png';
function About() {
  return (
    <div>
      
      {/* <Nav /> */}
      <div className="image-container">
        <img src={Suhbah} className="suhbah-logo" alt="logo" />
      </div>

      <div className="about-container">
        <h1>About Suhbah Collective</h1>
        <p>Suhbah Collective vows to fulfill the following principles for its members and provide services to further these goals.</p>
      </div>
      
      <div className="border-container">
        <div className='border'>
          <div className='image-container'>
            <p>IMAGE</p>
            <strong>To promote a sense of community amongst members of the Islamic faith and their affiliates within the state of Minnesota: instilling a sense of pride for their faith. </strong>
            </div>

          </div>
          <div className='border'>
          <div className='image-container'>
            <p>IMAGE</p>

            <strong>To promote financial stability and independence amongst the collective’s members and to escape the grasp of usury and unlawful finances. </strong>
          </div>
          </div>
          <div className='border'>
          <div className='image-container'>
            <p>IMAGE</p>

            <strong>To develop the communities of the collective’s members and provide services offered in a muslim friendly environment.</strong>
          </div>
          </div>
      </div>
      <br/>
      
      <Footer/>

    </div>
  )
}

export default About