import React from 'react';
import offerpageicon from '../assets/offerpageicon.png'; // Adjust the path as necessary

const WeddingEventOffer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContent}>
        <h1 style={styles.title}>20% OFF Wedding Events For Limited Sale</h1>
        <p style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button style={styles.claimButton}>CLAIM DISCOUNT</button>
      </div>
      <div style={styles.imageContainer}>
        <img src={offerpageicon} alt="Wedding Event" style={styles.image} />
      </div>
    </div>
  );
};

// Inline styles for quick adjustments
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px 10%', // 10% gap on left and right sides
    backgroundColor: '#ffffff',
    border: '1px solid #000000',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '1500px',
    margin: '50px auto', // Center the container
    flexDirection: 'row', // Default: row layout for larger screens
    flexWrap: 'wrap', // Ensure content wraps if space is limited
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '45%', // Adjust text container width
    color: 'black',
  },
  title: {
    fontSize: '2.5em',
    margin: '0 0 20px 0',
  },
  description: {
    fontSize: '1em',
    color: '#777',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  claimButton: {
    backgroundColor: '#f19d3f',
    color: '#ffffff',
    fontSize: '1em',
    padding: '10px 15px', // Reduced padding for better size control
    border: 'none',
    cursor: 'pointer',
    borderRadius: '20px',
    transition: 'background-color 0.3s ease',
    maxWidth: '200px', // Limit the maximum width of the button
    textAlign: 'center', // Center text within the button
  },
  imageContainer: {
    width: '300px', // Adjust width as needed
    marginLeft: '20px', // Adjust margin for spacing
  },
  image: {
    width: '100%',
    height: 'auto', // Maintain aspect ratio
  },

  // Responsive styles
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column', // Change to column layout for mobile
      textAlign: 'center', // Center-align content for better readability
    },
    textContent: {
      maxWidth: '100%', // Full width on smaller screens
      marginBottom: '20px',
    },
    imageContainer: {
      width: '100%', // Make image take full width on mobile
      marginLeft: '0', // Remove left margin
    },
    image: {
      maxWidth: '300px', // Adjust maximum image size for mobile
      margin: '0 auto', // Center the image
    },
  },
};

export default WeddingEventOffer;
