import React from 'react';
import './contact.css'; // Make sure to link your CSS file

const Contact = () => {
  return (
    <>
    <div class="new_home_web">
  <div class="responsive-container-block big-container">
    {/* <img class="imgBG" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw65.png" alt="Background Image"/> */}
    <div class="responsive-container-block textContainer">
      <div class="topHead">
        <p class="text-blk heading">
          Get in
          <span class="orangeText">touch</span>
        </p>
        <div class="orangeLine" id="w-c-s-bgc_p-2-dm-id"></div>
      </div>
      <p class="text-blk subHeading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
</div>


    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="NAME" name="name" />
                </div>
             
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="Subject" name="subject" />
                </div>

                <div className="app-form-group">
                  <input className="app-form-control" placeholder="EMAIL" type="email" name="email" />
                </div>
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="CONTACT NO" name="phone" />
                </div>
                <div className="app-form-group message">
                  <textarea className="app-form-control" placeholder="MESSAGE" name="message" />
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button">CANCEL</button>
                  <button className="app-form-button">SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default Contact;
