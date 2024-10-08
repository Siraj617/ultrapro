// Portfolio.js
import React, { useEffect, useRef, useState } from 'react';
import './Portfolio.css';

const Portfolio = ({ portfolioItems }) => { // Receive portfolioItems as props
  const portfolioRef = useRef(null);
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const itemRefs = useRef(filteredItems.map(() => React.createRef())); // Initialize refs for items

  useEffect(() => {
    positionItems(filteredItems);
  }, [filteredItems]);

  const positionItems = (items) => {
    const parentWidth = portfolioRef.current.offsetWidth;
    const rowItems = countRowsItems();
    const itemHeight = 220; // Fixed height for portfolio items
    let x = 0;
    let y = 0;

    items.forEach((item, i) => {
      const itemRef = itemRefs.current[i]; // Access the correct ref for this item
      if (itemRef.current) { // Ensure the ref exists
        itemRef.current.style.transform = `translate3d(${x * (parentWidth / rowItems)}px, ${y * itemHeight}px, 0)`;
        itemRef.current.style.opacity = 1;
      }
      x++;

      if (x % rowItems === 0) {
        y++;
        x = 0;
      }
    });

    portfolioRef.current.style.height = `${Math.ceil(items.length / rowItems) * itemHeight}px`;
  };

  const countRowsItems = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768) return 1;
    if (windowWidth <= 992) return 2;
    return 3;
  };

  const handleFilterChange = (filter) => {
    if (filter === '*') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.filter === filter));
    }
  };

  const handleResize = () => {
    positionItems(filteredItems);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [filteredItems]);

  return (
    <section className="portfolio section">
      <ul className="portfolio-cats">
        <li onClick={() => handleFilterChange('*')}>All</li>
        <li onClick={() => handleFilterChange('corporate')}>Corporate</li>
        <li onClick={() => handleFilterChange('group')}>Group</li>
      </ul>
      <div className="underline"></div>
      <div className="portfolio-gallery" ref={portfolioRef}>
        {filteredItems.map((item, index) => (
          <PortfolioItem key={index} item={item} ref={itemRefs.current[index]} />
        ))}
      </div>
    </section>
  );
};

const PortfolioItem = React.forwardRef(({ item }, ref) => (
  <div className="portfolio-item" ref={ref} data-filter={item.filter}>
    <div className="item-inner">
      <img src={item.imgSrc} alt="" />
    </div>
  </div>
));

export default Portfolio;
