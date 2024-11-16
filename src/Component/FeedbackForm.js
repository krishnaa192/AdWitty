import React from 'react';
import "./feedback.css";


const FeedbackForm = () => {
  return (
    <div className="feedback-form">
      <h3>Send Us Your Feedback</h3>
      <div className="app-form">
        <div className="app-form-group">
          <input className="app-form-control" placeholder="NAME" name="name" />
        </div>
        <div className="app-form-group">
          <input className="app-form-control" placeholder="Company Name" name="company" />
        </div>
        <div className="app-form-group">
          <input className="app-form-control" placeholder="EMAIL" type="email" name="email" />
        </div>
        <div className="app-form-group">
          <input className="app-form-control" placeholder="CONTACT NO" name="phone" />
        </div>
        <div className="app-form-group message">
          <textarea className="app-form-control" placeholder="Feedback" name="feedback" />
        </div>
        <div className="app-form-group buttons">
       
          <button className="app-form-button">SEND</button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
