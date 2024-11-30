import React from 'react'
import './body.css'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  
  
];
const Body = () => {
  return (
    <>
      <div className='content'>
        <div className='content-page'>
          <div className='banner'>
           <img src={`${process.env.PUBLIC_URL}/Image/1.jpg`}
           alt='banner' />
          

          </div>
        
      <div className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="caption header-text">
          
                <div className="line-dec"></div>
                <h4>Dive <em>Into The Witty</em> World <span>With ADWItty</span></h4>
                <p>
                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <div className="main-button scroll-to-section"><Link to="#services">Discover More</Link></div>
                <span>or</span>
                <div className="second-button"><Link to="/faqs">Check our FAQs</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading">
                    <h2>We Provide <em>Different Services</em> &amp; <span>Features</span> For Your Agency</h2>
                    <div className="line-dec"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="assets/images/services-01.jpg" alt="discover SEO" className="templatemo-feature" />
                    </div>
                    <h4>Discover More on Latest SEO Trends</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="assets/images/services-02.jpg" alt="data analysis" className="templatemo-feature" />
                    </div>
                    <h4>Real-Time Big Data Analysis</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="assets/images/services-03.jpg" alt="precise data" className="templatemo-feature" />
                    </div>
                    <h4>Complete Tech solutions &amp; Services</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="assets/images/services-04.jpg" alt="SEO marketing" className="templatemo-feature" />
                    </div>
                    <h4>Advertising marketing &amp; </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects section" id="projects">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>Discover Our <em>Work</em> &amp; <span>Projects</span></h2>
                <div className="line-dec"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p>
              </div>
            </div>
          </div> 
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-features owl-carousel">
                <div className="item">
                  <img src="assets/images/projects-01.jpg" alt="" />
                  <div className="down-content">
                    <h4>Digital Agency HTML Templates</h4>
                    <a href="#"><i className="fa fa-link"></i></a>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/projects-02.jpg" alt="" />
                  <div className="down-content">
                    <h4>Admin Dashboard CSS Templates</h4>
                    <a href="#"><i className="fa fa-link"></i></a>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/projects-03.jpg" alt="" />
                  <div className="down-content">
                    <h4>Best Responsive Website Layouts</h4>
                    <a href="#"><i className="fa fa-link"></i></a>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/projects-04.jpg" alt="" />
                  <div className="down-content">
                    <h4>HTML CSS Layouts for your websites</h4>
                    <a href="#"><i className="fa fa-link"></i></a>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/projects-02.jpg" alt="" />
                  <div className="down-content">
                    <h4>Bootstrap 5 Themes for Free</h4>
                    <a href="#"><i className="fa fa-link"></i></a>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/projects-03.jpg" alt="" />
                  <div className="down-content">
                    <h4>Mobile Friendly Website Layouts</h4>
                    <a href="#"><i className="fa fa-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="infos section" id="infos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="left-image">
                      <img src="assets/images/left-infos.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="section-heading">
                      <h2>More <em>About Us</em> &amp; What <span>We Offer</span></h2>
                      <div className="line-dec"></div>
                      <p>You are free to use this template for any purpose. You are not allowed to redistribute the downloadable ZIP file of Tale SEO Template on any other template website. Please contact us. Thank you.</p>
                    </div>
                    <div className="skills">
                      <div className="skill-slide marketing">
                        <div className="fill"></div>
                        <h6>Marketing</h6>
                        <span>90%</span>
                      </div>
                      <div className="skill-slide digital">
                        <div className="fill"></div>
                        <h6>Digital Media</h6>
                        <span>80%</span>
                      </div>
                      <div className="skill-slide media">
                        <div className="fill"></div>
                        <h6>Social Media Managing</h6>
                        <span>95%</span>
                      </div>
                      <div className="skill-slide media">
                        <div className="fill"></div>
                        <h6>Website Developement </h6>
                        <span>95%</span>
                      </div>
                    </div>
                    <p className="more-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore dolor dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    
        </div>
      </div>
      <button className="help-button">
  <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
    Hi, how can I help?
  </Link>
</button>
<div className='section-heading'>
  <h2>
  <u>Charts we offer to clients.</u>  
  </h2>
</div>
<ImageList
  sx={{
    width: { xs: '100vw', sm: '80vw', md: 1000 },
    height: { xs: 'auto', md: 650 },
    marginLeft: { xs: 0, md: '13%' },
    marginTop: 2,
  }}
  cols={3}
  rowHeight={304}
>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>


    </>
  )
}

export default Body
