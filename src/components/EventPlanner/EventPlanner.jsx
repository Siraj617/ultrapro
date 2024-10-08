import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRing, faUsers, faBriefcase } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './EventPlanner.css'; // Import CSS file

const EventPlanner = () => {
  return (
    <div className="event-planner-container">
      {/* Left Content */}
      <div className="left-content">
        <h1 className="title">WHAT DO YOU PLAN? WE WILL <br /> LEND YOU A HAND</h1>
        <div className="buttons">
          <button className="btn-get-started">Get Started</button>
          <button className="btn-learn-more">Learn More</button>
        </div>
      </div>

      {/* Right Content with Video and Services Row */}
      <div className="right-content">
        <iframe
          src="https://www.youtube.com/embed/your-video-id" 
          frameBorder="0" 
          allowFullScreen 
          className="iframe"
        ></iframe>

        {/* Services Section */}
        <h2 className="service-title">Services</h2>
        <div className="services-list">
          <div className="service-item">
            <FontAwesomeIcon icon={faRing} className="service-icon" />
            <p>Wedding Organizer</p>
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faUsers} className="service-icon" />
            <p>Social Gatherings</p>
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faBriefcase} className="service-icon" />
            <p>Corporate Events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPlanner;
