import React from 'react';
import { Link } from 'react-router-dom';
import validStudents from '../data/validStudents.json';

const ExternalAccess = () => {
  return (
    <div className="external-access">
      <div className="content-wrapper">
        <h1>🔒 Protected Event</h1>
        <div className="info-box">
          <h2>{validStudents.event_details.name}</h2>
          <p className="highlight">This is an exclusive event for NITJ ICE Department students.</p>
          
          <div className="event-details">
            <h3>Event Information</h3>
            <p><strong>Date:</strong> {new Date(validStudents.event_details.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Venue:</strong> {validStudents.event_details.venue}</p>
          </div>

          <div className="message">
            <h3>Not from NITJ?</h3>
            <p>While this event is exclusive to our ICE Department students, you can:</p>
            <ul>
              <li>Learn more about our department</li>
              <li>Follow our social media for public events</li>
              <li>Connect with our faculty and students</li>
            </ul>
          </div>
        </div>

        <div className="action-links">
          <a href="https://www.nitj.ac.in/ice" target="_blank" rel="noopener noreferrer" className="dept-link primary">Visit ICE Department</a>
          <a href="https://www.nitj.ac.in" target="_blank" rel="noopener noreferrer" className="college-link secondary">Visit NITJ Website</a>
          <Link to="/" className="home-link">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ExternalAccess;
