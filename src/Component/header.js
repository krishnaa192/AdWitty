import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const [servicesOpen, setServicesOpen] = useState(false); // Services dropdown state
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="navbar-main">
      <div className="header-nav">
        <div className="nav-logo">
          <a href="/">
            <img src="/image/blob.png" alt="Logo" />
          </a>
        </div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <div className="nav-services">
            <button
              className="services-button"
              onClick={() => setServicesOpen(!servicesOpen)} // Toggle Services dropdown
            >
             <span>Services </span> 
            </button>
            {servicesOpen && (
              <div className="services-dropdown">
                <div className="services-category">
                  <div
                    className="category-header"
                    onClick={() => toggleCategory("brand")}
                  >
                    <span>BRAND</span>
                    <span>{activeCategory === "brand" ? "▾" : "▸"}</span>
                  </div>
                  {activeCategory === "brand" && (
                    <div className="category-content">
                      <a href="/services/digital-strategy">
                        Google My Business
                      </a>
                      <a href="/services/seo">Search Engine Optimization</a>
                    </div>
                  )}
                </div>
                <div className="services-category">
                  <div
                    className="category-header"
                    onClick={() => toggleCategory("digital")}
                  >
                    <span>DIGITAL</span>
                    <span>{activeCategory === "digital" ? "▾" : "▸"}</span>
                  </div>
                  {activeCategory === "digital" && (
                    <div className="category-content">
                      <a href="/services/digital-strategy">
                        Performance Marketing
                      </a>
                      <a href="/services/seo">
                        Social Media Management
                      </a>
                    </div>
                  )}
                </div>
                <div className="services-category">
                  <div
                    className="category-header"
                    onClick={() => toggleCategory("product")}
                  >
                    <span>PRODUCT</span>
                    <span>{activeCategory === "product" ? "▾" : "▸"}</span>
                  </div>
                  {activeCategory === "product" && (
                    <div className="category-content">
                      <a href="/services/product-discovery">
                        Product Discovery
                      </a>
                      <a href="/services/mobile-app-design">
                        Mobile App Design
                      </a>
                      <a href="/services/brand-identity">
                        Brand Identity
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <a href="/contact">Contact</a>
        </div>
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>
      </div>
    </div>
  );
};

export default Header;
