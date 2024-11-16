import React, { useState } from 'react';
import './feedback.css';
import './modalForm.css'
import FeedbackForm from './FeedbackForm'; // Import FeedbackForm component

const feedbackData = [
  { name: 'Alice Johnson', feedback: 'Great service, very satisfied!', rating: 5 },
  { name: 'Michael Smith', feedback: 'Helpful staff and smooth experience.', rating: 4 },
  { name: 'Emma Brown', feedback: 'Average experience, could be improved.', rating: 3 },
  { name: 'David Wilson', feedback: 'Exceptional support and fast response!', rating: 5 },
];

const Feedback = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="feedback-container">
        <h2>What Our Clients Say</h2>
        <div className="feedback-list">
          {feedbackData.map((item, index) => (
            <div className="feedback-card" key={index}>
              <h3 className="client-name">{item.name}</h3>
              <p className="client-feedback">{item.feedback}</p>
              <div className="client-rating">
                {'⭐'.repeat(item.rating)}
              </div>
            </div>
          ))}
        </div>
        <button className="help-button" onClick={openModal}>
        Leave Feedback
</button>
        
      </div>

      {/* Modal to show FeedbackForm */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal-button" onClick={closeModal}>X</button>
            <FeedbackForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Feedback;
