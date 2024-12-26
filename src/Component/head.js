import React, { useState } from "react";
import "./head.css";


const Head = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="container">
     
      {/* Hamburger Menu */}
      <div className="xs-menu-cont">
        <button id="menutoggle" onClick={toggleMenu}>
          <i className="fa fa-align-justify"></i>
        </button>
        <nav className={`xs-menu ${menuVisible ? "" : "displaynone"}`}>
          <ul>
           
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
        
            <li>
            <button
  onClick={toggleDropdown}
  className="dropdown-toggle"
  aria-expanded={dropdownVisible}
>
  Services

</button>

{dropdownVisible && (
  <ul className="dropdown-menu">
    <li> <a href="/services/digital-strategy">
                        Google My Business
                      </a></li>
    <li>  <a href="/services/seo">Search Engine Optimization</a></li>
    <li> <a href="/services/digital-strategy">
                        Performance Marketing
                      </a></li>
    <li> <a href="/services/seo">
                        Social Media Management
                      </a></li>
    <li> <a href="/services/product-discovery">
                        Product Discovery
                      </a></li>
    <li> <a href="/services/mobile-app-design">
                        Mobile App Design
                      </a></li>
    <li>  <a href="/services/brand-identity">
                        Brand Identity
                      </a></li>
  </ul>
)}

            </li>
            <li>
              <a href="/contacts">Contact</a>
            </li>
            <li >
            <a   href="https://wa.me/918591255620" 
    target="_blank" 
    rel="noopener noreferrer">Reach Out to Us</a>
          </li>
          </ul>
        </nav>
      </div>
      {/* Main Menu */}
      <nav className="menu">
        <ul>
         
        <li className="img">
          <a href="/">
          <img src="/image/blob.png" alt="Logo" />
          </a>
      
          </li>
          <li className="active">
            <a href="/">Home</a>
          </li>
          <li>
              <a href="/about">About</a>
            </li>
          
            <li
  className="drop-down"
  onMouseEnter={() => setDropdownVisible(true)}
  onMouseLeave={() => setDropdownVisible(false)}
>
  Services
  <div className={`mega-menu ${dropdownVisible ? "display-on" : ""}`}>
  <div className="mm-container">
   
    <div className="mm-columns">
      <div className="mm-column">
        <CategoryList
          title="Performance Marketing"
          items={[
            "Good Analytics",
            "Campaign Strategy",
            "Target Audience Identification",
            "Ad Budget Optimization",
          ]}
          link='/services/performance-marketing'
        />
      </div>
      <div className="mm-column">
        <CategoryList
          title="Social Media Management"
          items={[
            "Content Creation",
            "Community Engagement",
            "Social Media Strategy",
            "Brand Awareness Campaigns",
          ]}
           link='/services/social-media'
        />
      </div>
      <div className="mm-column">
        <CategoryList
          title="Google My Business"
          items={[
            "Profile Setup",
            "Customer Reviews Management",
            "Business Insights Monitoring",
            "Local SEO Optimization",
          ]}
          link='/services/google-my-business'
        />
      </div>
      <div className="mm-column">
        <CategoryList
          title="Search Engine Optimization"
          items={[
            "Keyword Research",
            "Link Building",
            "On-Page SEO Optimization",
            "Technical SEO Analysis",
          ]}
          link='/services/seo'
        />
      </div>
      <div className="mm-column">
        <CategoryList
          title="Web Development"
          items={[
            "Responsive Design",
            "Backend Development",
            "E-commerce Integration",
            "Custom Web Solutions",
          ]}
          link='/services/webdev'
        />
      </div>
    </div>
  </div>
</div>

</li>

          <li>
            <a  href="/contact">
              Contact
            </a>
          </li>
          <li style={{ float: "right" }}>
            <a   href="https://wa.me/918591255620" 
    target="_blank" 
    rel="noopener noreferrer">Reach Out to Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const CategoryList = ({ title, items,link }) => {
  return (
    <span className="categories-list">
      <ul>
        <span>{title}</span>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <li>
        <a className="mm-view-more" href={link}>
              View more →
            </a>
        </li>
      </ul>
    </span>
  );
};

export default Head;
