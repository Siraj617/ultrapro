// src/components/Navbar/Navbar.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar'; // Adjust the import path if necessary

describe('Navbar Component', () => {
  test('renders Navbar with logo', () => {
    render(<Navbar />); // Render the Navbar component
    const navbarElement = screen.getByAltText(/Ultrapro Logo/i);
    expect(navbarElement).toBeInTheDocument(); // Checks if the logo is present
  });

  test('renders Navbar with navigation links', () => {
    render(<Navbar />);
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument(); // Checks if "Home" link is present
  });
});
