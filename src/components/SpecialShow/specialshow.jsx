// SpecialShow.js
import React from 'react';
import './SpecialShow.css'; // Create a separate CSS file for styles if needed

const SpecialShow = () => {
  return (
    <div className="container">
      {/* Step 1: Add titles */}
      <div className="titles">
        <h3>SPECIAL SHOW</h3>
        <h1>Charlie Putra</h1>
        <h2>Love for Everyone</h2>
      </div>

      {/* Step 2 & 4: Content container */}
      <div className="content">
        {/* Left text */}
        <div className="left-text">
          <p>
            At only 29 years old, Charlie Puth has proven to be one of the industry's most consistent hitmakers and sought-after collaborators. Puth has amassed eight multi-platinum singles, four GRAMMY nominations, two Billboard Music Awards.
          </p>
        </div>

        {/* Step 3: Image container */}
        <div className="image-container">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9prJ52W6FaVjG1J5KPWRD-hAQRo7bizACcg&s" 
            alt="Charlie Putra" 
          />
        </div>

        {/* Right text */}
        <div className="right-text">
          <p>
            Was RIAA certified gold only four days after its release and has logged five billion streams worldwide. In 2020, Puth's collaboration with Gabby Barrett on their "I Hope" Remix earned him his fourth top 10 track on the Billboard Hot 100 and hit number one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialShow;
