// SweetMoment.js
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './SweetMoment.css'; // External CSS file for better maintainability

const SweetMoment = ({ textItems, videoUrls }) => {
  const scrollableRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check initial screen size

  const handleScroll = (direction) => {
    const newIndex = activeIndex + direction;

    // Ensure the index is within bounds
    if (newIndex >= 0 && newIndex < textItems.length) {
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (scrollableRef.current) {
      const itemHeight = scrollableRef.current.firstChild.clientHeight; // Get height of the first item
      scrollableRef.current.scrollTop = itemHeight * activeIndex; // Scroll to the active item
    }
  }, [activeIndex]);

  return (
    <div className={`sweet-moment-container ${isMobile ? 'mobile' : 'desktop'}`}>
      {/* Left Section */}
      <div className="sweet-moment-left">
        <div className="sweet-moment-title">
          <h1>Our 2024</h1>
          <h1>Sweet Moment</h1>
        </div>

        {/* Scrollable Text Section */}
        <div className="sweet-moment-scroll-container">
          <div 
            className="sweet-moment-arrow" 
            onClick={() => handleScroll(-1)} // Scroll up
            aria-label="Scroll Up"
            role="button"
          >
            &#9650;
          </div>
          <div className="sweet-moment-scrollable-text" ref={scrollableRef}>
            {textItems.map((item, index) => (
              <div 
                key={index} 
                className={`sweet-moment-text-item ${index === activeIndex ? 'active' : ''}`}
              >
                {item}
              </div>
            ))}
          </div>
          <div 
            className="sweet-moment-arrow" 
            onClick={() => handleScroll(1)} // Scroll down
            aria-label="Scroll Down"
            role="button"
          >
            &#9660;
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="sweet-moment-right">
        <div className="sweet-moment-video-info">
          <p>{activeIndex + 1} / {textItems.length}</p> {/* Update video info dynamically */}
        </div>
        <iframe 
          src={videoUrls[activeIndex]} // Update video source based on active index
          frameBorder="0" 
          allowFullScreen 
          title="Video"
          className="sweet-moment-iframe"
        ></iframe>
      </div>
    </div>
  );
};

// PropTypes for type-checking
SweetMoment.propTypes = {
  textItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  videoUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SweetMoment;
