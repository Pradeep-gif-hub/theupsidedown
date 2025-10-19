import React, { useState, useEffect } from 'react';
import validStudents from '../data/validStudents.json';

const TicketDownload = () => {
  const [email, setEmail] = useState(sessionStorage.getItem('userEmail') || '');
  const [showTicket, setShowTicket] = useState(false);
  const [studentEmail, setStudentEmail] = useState('');
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    document.body.classList.remove('cursed');

    if (email) {
      const validEmailPattern = /\.ic\.(22|23|24|25)@nitj\.ac\.in$/;
      if (validEmailPattern.test(email)) {
        setStudentEmail(email);
        setShowSuccess(true);
        setTimeout(() => {
          setShowTicket(true);
        }, 1500);
      }
    }

    return () => {
      document.body.classList.remove('cursed');
    };
  }, [email]);

  const verifyEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setShowSuccess(false);

    const validEmailPattern = /\.ic\.(22|23|24|25)@nitj\.ac\.in$/;
    if (validEmailPattern.test(email)) {
      setStudentEmail(email);
      setShowSuccess(true);
      setTimeout(() => {
        setShowTicket(true);
      }, 1500);
    } else {
      setError('🦇 CURSED BY VECNA! 🦇');
      document.body.classList.add('cursed');
      setTimeout(() => {
        document.body.classList.remove('cursed');
      }, 1000);
    }
  };

  if (showSuccess && !showTicket) {
    return (
      <div className="ticket-container verification-success">
        <div className="stranger-title font">{validStudents.event_details.name}</div>
        <div className="strange-lights">
          {[...Array(10)].map((_, i) => <div key={i} className="light"></div>)}
        </div>
        <p className="success-message font">Opening the gate to the Upside Down...</p>
      </div>
    );
  }

  return (
    <div className={`ticket-container ${showTicket ? 'hawkins-theme' : ''}`}>
      {!showTicket ? (
        <div className="verification-form">
          <div className="stranger-title font stroked-text">{validStudents.event_details.name}</div>
          <div className="strange-lights">
            {[...Array(10)].map((_, i) => <div key={i} className="light"></div>)}
          </div>
          <div className="fog absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none"></div>
          <p className="event-intro text-[#e81919] text-lg font-semibold tracking-wide">
            The Gate to the ICE Freshers Party is about to open...
          </p>
          <form onSubmit={verifyEmail}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
              placeholder="Enter your NITJ email"
              required
              className="hawkins-input"
            />
            <button type="submit" className="hawkins-btn font">Open The Gate</button>
          </form>
          {error && <p className="vecna-curse font">{error}</p>}
        </div>
      ) : (
        <div className="ticket hawkins-lab">
          <div className="fog absolute top-0 left-0 w-full h-full pointer-events-none opacity-20"></div>
          <div className="ticket-header">
            <div className="stranger-title font stroked-text-light">{validStudents.event_details.name}</div>
            <div className="classified-stamp font">TOP SECRET</div>
          </div>
          <div className="ticket-body relative z-10">
            <div className="ticket-details">
              <p className="detail-line">
                <span className="detail-label font">SUBJECT ID:</span>
                <span className="detail-value">{studentEmail}</span>
              </p>
              <p className="detail-line">
                <span className="detail-label font">LOCATION:</span>
                <span className="detail-value">{validStudents.event_details.venue}</span>
              </p>
              <p className="detail-line">
                <span className="detail-label font">DATE OF EXPERIMENT:</span>
                <span className="detail-value">{new Date(validStudents.event_details.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </p>
              <p className="detail-line">
                <span className="detail-label font">TIME:</span>
                <span className="detail-value">{validStudents.event_details.time}</span>
              </p>
              <p className="detail-line">
                <span className="detail-label font">DURATION:</span>
                <span className="detail-value">{validStudents.event_details.duration}</span>
              </p>
              <p className="detail-line">
                <span className="detail-label font">DRESS PROTOCOL:</span>
                <span className="detail-value">{validStudents.event_details.dress_code}</span>
              </p>
            </div>
            <div className="hawkins-warning">
              <div className="warning-tape"></div>
              <p className="font text-center py-3"><strong>⚠ WARNING ⚠</strong></p>
              <p className="text-center">{validStudents.event_details.important_note}</p>
              <div className="warning-tape"></div>
            </div>
            <div className="upside-down-portal">
              <div className="portal-ring"></div>
              <div className="portal-ring"></div>
              <div className="portal-ring"></div>
            </div>
          </div>
          <div className="ticket-footer">
            <button onClick={() => window.print()} className="hawkins-btn download-button font">
              Print Classified Document
            </button>
          </div>
          <div className="strange-lights bottom">
            {[...Array(10)].map((_, i) => <div key={i} className="light"></div>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketDownload;
