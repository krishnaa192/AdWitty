import React from 'react';
import './Footer.css';

export function FooterComp() {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="logo-widget footer-widget">
                
               
                  <ul className="footer-social">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-vimeo-v"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
                <div className="service-widget footer-widget">
                
                  <ul className="list">
                    <li>
                      <a href="#">Water Surve</a>
                    </li>
                    <li>
                      <a href="#">Education for all</a>
                    </li>
                    <li>
                      <a href="#">Food Serving</a>
                    </li>
                    <li>
                      <a href="#">Animal Saves</a>
                    </li>
                    <li>
                      <a href="#">Help Orphan</a>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
      {/* main-footer end */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <div className="copyright">
                <a href="#">ADWItty</a> &copy; 2024 All Rights Reserved
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterComp;
