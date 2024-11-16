// About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/fontawesome.css';
import '../assets/css/templatemo-tale-seo-agency.css';
import '../assets/css/owl.css';
import '../assets/css/animate.css';
import { Link } from 'react-router-dom';


// import 'swiper/swiper-bundle.min.css';

const About = () => {
  return (
    <div>
      {/* Page Heading */}
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="caption header-text">
                <h6>AD WITTY</h6>
                <div className="line-dec"></div>
                <h4>Discover More <em>About Us</em></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore.</p>
                <div className="main-button"><a href="#">Discover More</a></div>
               
<button className="help-button">
  <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
    Hi, how can I help?
  </Link>
</button>

              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <img src="assets/images/about-us-image.jpg" alt="About Us" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Information */}
      <div className="video-info section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="video-thumb">
                <img src="assets/images/video-thumb.jpg" alt="Video Thumbnail" />
                <a href="http://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-play"></i></a>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h2>Detailed Information On What We Do &amp; Who We Are</h2>
                <div className="line-dec"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore dolor.</p>
              </div>
              <div className="skills">
                <SkillSlide title="SEO Marketing" percentage="90%" />
                <SkillSlide title="Digital Marketing" percentage="80%" />
                <SkillSlide title="Social Media Management" percentage="95%" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Happy Clients Section */}
      <div className="happy-clients section">
        <div className="container">
          <div className="section-heading">
            <h2>Our 4 Steps <em>To Success</em> &amp; <span>Happy Clients</span></h2>
            <div className="line-dec"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers.</p>
          </div>
          <Tabs />
        </div>
      </div>

   

     
    </div>
  );
};

// SkillSlide Component
const SkillSlide = ({ title, percentage }) => (
  <div className="skill-slide">
    <div className="fill" style={{ width: '100%' }}></div>
    <h6>{title}</h6>
  
  </div>
);

// Tabs Component
const Tabs = () => (
  <div className="naccs">
    <div className="tabs">
      <div className="menu">
        <div className="active"><span>Project Introduction</span></div>
        <div><span>Tech Assistance</span></div>
     <div>
     <span>Advertising and marketing</span></div> 

  
        <div className="last-item"><span>Data Analysis</span></div>
      </div>
     
     
    </div>
  </div>
);

export default About;
