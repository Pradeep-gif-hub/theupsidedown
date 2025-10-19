import React from 'react';
import { Link } from 'react-router-dom';
import validStudents from '../data/validStudents.json';

const AccessDenied = () => {
  return (
    <div className="access-denied">
      <div className="upside-down-content">
        <h1>⛔ You're Stuck in the Upside Down! ⛔</h1>
        <div className="message-box">
          <h2>Oops! Wrong Department</h2>
          <p>We detected you're from NITJ, but this event is exclusively for ICE Department students.</p>
          <div className="event-info">
            <h3>Event Details:</h3>
            <p><strong>What:</strong> {validStudents.event_details.name}</p>
            <p><strong>When:</strong> {new Date(validStudents.event_details.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Where:</strong> {validStudents.event_details.venue}</p>
          </div>
          <div className="help-text">
            <p>Don't worry! While you can't attend this particular event, you can:</p>
            <ul>
              <li>Follow ICE Department's upcoming events</li>
              <li>Connect with ICE students for future collaborations</li>
              <li>Visit the ICE Department page for more information</li>
            </ul>
          </div>
        </div>
        <div className="action-buttons">
          <Link to="/" className="home-button">Return to Safety</Link>
          <a href="https://www.nitj.ac.in/ice" target="_blank" rel="noopener noreferrer" className="dept-button">Visit ICE Department</a>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
