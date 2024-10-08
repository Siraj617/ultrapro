// Importing necessary libraries and components
import React from 'react';
import './components/Navbar/Navbar.css'; // Import global styles for the Navbar
import Navbar from './components/Navbar/Navbar'; // Correct path to import Navbar
import CardGrid from './components/CardGrid/CardGrid'; // Import the CardGrid component
import './App.css'; // Import global styles for the App
import SpecialShow from './components/SpecialShow/specialshow'; // Import the SpecialShow component
import WeddingEventOffer from './components/WeddingEventOffer/WeddingEventOffer'; // Import the WeddingEventOffer component
import SweetMoment from './components/sweetmoment/SweetMoment'; // Import the SweetMoment component
import EventPlanner from './components/EventPlanner/EventPlanner'; // Import the EventPlanner component
import Portfolio from './components/Portfolio/Portfolio'; // Import the Portfolio component
import Footer from './components/Footer/Footer'; // Import the Footer component

// Sample data for portfolio items
const portfolioItemsData = [
  { filter: 'corporate', imgSrc: 'https://unsplash.com/photos/xsGxhtAsfSA/download?force=true&w=640' },
  { filter: 'group', imgSrc: 'https://unsplash.com/photos/yC-Yzbqy7PY/download?force=true&w=640' },
  { filter: 'corporate', imgSrc: 'https://unsplash.com/photos/PDX_a_82obo/download?force=true&w=640' },
  { filter: 'group', imgSrc: 'https://unsplash.com/photos/D_kOW7iHNnw/download?force=true&w=640' },
  { filter: 'corporate', imgSrc: 'https://unsplash.com/photos/eBRTYyjwpRY/download?force=true&w=640' },
  { filter: 'group', imgSrc: 'https://unsplash.com/photos/1SAnrIxw5OY/download?force=true&w=640' },
];

// Sample text items for the SweetMoment component
const sweetMomentTextItems = [
  "Probinair Launch Event",
  "Launch",
  "Exchange",
  "Announcement",
  "Meet"
];

// Sample video URLs for the SweetMoment component
const sweetMomentVideoUrls = [
  "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
  "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
  "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
  "https://www.youtube.com/embed/YOUR_VIDEO_ID_4",
  "https://www.youtube.com/embed/YOUR_VIDEO_ID_5",
];

// Sample data for cards to be displayed in the CardGrid component
const cardData = [
  { id: 1, title: "Initial Consultation", description: "Lorem Ipsum is simply dummy text..." },
  { id: 2, title: "Planning and Design", description: "Lorem Ipsum is simply dummy text..." },
  { id: 3, title: "Execution and Management", description: "Lorem Ipsum is simply dummy text..." },
  { id: 4, title: "Evaluation and Events", description: "Lorem Ipsum is simply dummy text..." },
];

// The main App component
const App = () => {
  return (
    <>
      <Navbar />
      <div className="content-container" style={{ overflow: 'hidden' }}>
        <img
          src={require('./components/assets/ultrapro.gif')}
          alt="Event Animation"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
          }}
        />
      <h6 className="subheading" style={{ position: 'relative', zIndex: 1, fontFamily: 'Georgia, serif' }}>Best Event Organizer</h6>
        <h1 className="main-heading" style={{ position: 'relative', zIndex: 1, fontFamily: 'Georgia, serif' }}>Unforgettable</h1>
        <h1 className="main-heading" style={{ position: 'relative', zIndex: 1, fontFamily: 'Georgia, serif' }}>Events Organizing</h1>
        <h6 className="description" style={{ position: 'relative', zIndex: 1, fontFamily: 'Georgia, serif' }}>Lorem ipsum dolor sit amet...</h6>
        <button className="service-button" style={{ position: 'relative', zIndex: 1, fontFamily: 'Georgia, serif' }}>Our Services</button>
      </div>

      <div style={{ marginTop: '20%' }}>
        <CardGrid cards={cardData} />
      </div>

      <SpecialShow />
      <WeddingEventOffer />
      <SweetMoment textItems={sweetMomentTextItems} videoUrls={sweetMomentVideoUrls} />
      <EventPlanner />
      <Portfolio portfolioItems={portfolioItemsData} />
      <Footer />
    </>
  );
};

// Export the App component as default
export default App;
