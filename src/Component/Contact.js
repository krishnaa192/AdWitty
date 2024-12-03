import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_r1ndzv8', // Use your Email.js Service ID
        'template_v22fq6g', // Replace with your Email.js Template ID
        formData,
        'U130P9eeEmtZdWSDl' // Replace with your Email.js Public Key
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setStatusMessage('Message sent successfully!');
          setFormData({ name: '', subject: '', email: '', phone: '', message: '' }); // Reset the form
        },
        (error) => {
          console.error('Failed to send email.', error);
          setStatusMessage('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <>
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
                <div className="app-contact"></div>
              </div>
              <div className="screen-body-item">
                <form className="app-form" onSubmit={sendEmail}>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAME"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT NO"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="app-form-group message">
                    <textarea
                      className="app-form-control"
                      placeholder="MESSAGE"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button type="button" className="app-form-button" onClick={() => setFormData({})}>
                      CANCEL
                    </button>
                    <button type="submit" className="app-form-button">
                      SEND
                    </button>
                  </div>
                </form>
                {statusMessage && <p className="status-message">{statusMessage}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
