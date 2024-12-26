import React from 'react'
import './body.css'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt, FaIndustry, FaChartLine, FaRocket } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.css";


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
const cards = [
  {
    id: 1,
    icon: <FaRegCalendarAlt />,
    number: 1,
    text: "Established in 2024, we are here to bring digital revolution in  industry experience",
    color: "#FFD700",
  },
  {
    id: 2,
    icon: <FaIndustry />,
    number: 7,
    text: "We've served clients across various industries",
    color: "#FF69B4",
  },
  {
    id: 3,
    icon: <FaChartLine />,
    number: 4,
    text: "A proven track record with a high retention rate",
    color: "#00BFFF",
  },
  {
    id: 4,
    icon: <FaRocket />,
    number: 1,
    text: "Experience up to 7x revenue growth with Adwitty",
    color: "#8A2BE2",
  },
];

const values = [
  {
    title: "WE ARE YOUR PARTNER, NOT YOUR VENDOR",
    description:
      "It takes consistent collaboration to arrive at impactful solutions. We love working together with our clients to make that happen, leveraging their experiences with our expertise to create something worth sharing.",
  },
  {
    title: "WE CARE TOO MUCH TO PRETEND WE DON’T",
    description:
      "We simply can’t help ourselves from combing through the details. Transparency and honesty are equally important to us—we’ll let you know what you’re thinking, when we’re thinking it.",
  },
  
  {
    title: "WE UNDERSTAND BEFORE WE EXECUTE",
    description:
      "Measure twice, cut once. It works for carpenters, and it works for us. We strive to understand every side of the problem so we can develop accurate, holistic solutions.",
  },
  {
    title: "WE LEAD WITH INCLUSION",
    description:
      "We seek diverse perspectives and viewpoints to grow our understanding of the world around us. As we leverage and celebrate these personal experiences and cultures, we can more easily find powerful solutions to the problems that matter.",
  },
  {
    title: "WE CARE TOO MUCH TO PRETEND WE DON’T",
    description:
      "We simply can’t help ourselves from combing through the details. Transparency and honesty are equally important to us—we’ll let you know what you’re thinking, when we’re thinking it.",
  },
  {
    title: "NO EGO, ONLY IMPACT",
    description:
      "No task is beneath us. We seek to make a positive difference, no matter what that looks like or who gets the job done.",
  },
];
const Body = () => {
  return (
    <>
      <div className='content'>
        <div className='content-page'>
          <div className='banner'>
           <img src={`${process.env.PUBLIC_URL}/Image/banner1.jpg`}
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
                AdWitty is the perfect platform for your business, offering customized, research-based, and growth-oriented solutions. Our team of experts will collaborate with you to understand your business goals and create a tailored strategy to achieve them. We will provide you with the tools, insights, and resources you need to succeed and drive your business forward.
                </p>
                <div className="main-button scroll-to-section"><Link to="/services/performance-marketing">Discover More</Link></div>
               
            
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
                    <p>From starting business to a great growth we provide all the services that you need to grow your business.</p>
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
                    <h4>Advertising marketing &amp; Google Bussiness </h4>
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
                <h2>Discover Our <em>Work</em> &amp; <span>Achievements</span></h2>
                <div className="line-dec"></div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p> */}
              </div>
            </div>
          </div> 
        </div>
        <div className="info-cards">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div className="icon" style={{ color: card.color }}>
            {card.icon}
          </div>
          <h2>{card.number}</h2>
          <p>{card.text}</p>
        </div>
      ))}
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
                      {/* <p>You are free to use this template for any purpose. You are not allowed to redistribute the downloadable ZIP file of Tale SEO Template on any other template website. Please contact us. Thank you.</p> */}
                    </div>
                    <div className="skills">
                      <div className="skill-slide marketing">
                        <div className="fill"></div>
                        <h6>Google My Business</h6>
                 
                      </div>
                      <div className="skill-slide digital">
                        <div className="fill"></div>
                        <h6>Digital Marketing</h6>
                       
                      </div>
                      <div className="skill-slide media">
                        <div className="fill"></div>
                        <h6>Social Media Managing</h6>
                    
                      </div>
                      <div className="skill-slide media">
                        <div className="fill"></div>
                        <h6>Website Developement </h6>
                        
                      </div>
                      <div className="skill-slide media">
                        <div className="fill"></div>
                        <h6>Search Engine Optimization</h6>
                    
                      </div>
                    </div>
                    {/* <p className="more-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore dolor dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p> */}
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
  <a 
    href="https://wa.me/918591255620" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
  >
    <i className="fab fa-whatsapp" style={{ marginRight: '8px', fontSize: '1.2rem' }}></i>
    Hi, how can I help?
  </a>
</button>


<div className="our-values-container">
      <div className="banner-values">
     <h1>
    
     </h1>
      </div>
      <div className="promise-section">
        <h2>Our promise is this:</h2>
        <p>
          Our passion for the work is fueled by our care for each other. We
          trust in our collective knowledge, always seeking elevation through
          understanding. We humbly dive into the unknown, explore with purpose,
          and emerge with impactful solutions. These values guide us through
          every project, every partnership. Every time.
        </p>
        <a href="/contact" className="join-us-link">JOIN US</a>
      </div>
      <div className='values'>
      <div className="values-grid">
        {values.map((value, index) => (
          <div className="value-card" key={index}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
      <div className='value-image'>
        {/* <img src={`${process.env.PUBLIC_URL}/Image/values.jpg`}
        alt='value-image' /> */}
        </div>
        </div>
    </div>
{/* <div className='section-heading'>
  <h2>
  <u>Charts we offer to clients.</u>  
  </h2>
</div> */}
{/* <ImageList
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
</ImageList> */}
    </>
  )
}

export default Body
