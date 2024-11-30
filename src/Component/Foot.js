import React from 'react';
import './Foot.css'; // Adjust the path as needed for your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__parralax">
        <div className="footer__parralax-trees"></div>
        <div className="footer__parralax-moto"></div>
        <div className="footer__parralax-secondplan"></div>
        <div className="footer__parralax-premierplan"></div>
        <div className="footer__parralax-voiture"></div>
      </div>
      <div className="container">
        <div className="footer__columns">
          <div className="footer__col">
            <h3 className="footer__col-title">
              <i data-feather="shopping-bag"></i> <span>services</span>
            </h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <a href="/services/google-my-business" className="footer__nav-link">
                   Google
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/services/webdev" className="footer__nav-link">
                 Website developement
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/services/seo" className="footer__nav-link">
                    SEO Services
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/services/social-media" className="footer__nav-link">
                   Social Media Marketing
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/services/performance-marketing" className="footer__nav-link">
                   Affiliate Marketing
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">
              <i data-feather="share-2"></i> <span>Social Media</span>
            </h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <a href="https://github.com/krishnaa192" className="footer__nav-link">
                    <i data-feather="youtube"></i>
                    <span>Youtube</span>
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="https://github.com/krishnaa192" className="footer__nav-link">
                    <i data-feather="facebook"></i>
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="https://github.com/krishnaa192" className="footer__nav-link">
                    <i data-feather="instagram"></i>
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">
              <i data-feather="send"></i> <span>Contact</span>
            </h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <a
                    href="mailto:contact.laboiserie@gmail.com"
                    className="footer__nav-link"
                  >
                    contact.adwitty@gmail.com
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer__copyrights">
          <p>
            Copyright {' '}
            <a href="https://github.com/krishnaa192" target="_blank" rel="noopener noreferrer">
              @Adwitty 2024
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
