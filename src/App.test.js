// src/App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Ensure the import path is correct

describe('App Component', () => {
  test('renders Navbar with logo', () => {
    render(<App />);
    const navbarElement = screen.getByAltText(/Ultrapro Logo/i);
    expect(navbarElement).toBeInTheDocument(); // Checks if the logo is present
  });

  test('renders Navbar with Home link', () => {
    render(<App />);
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument(); // Checks if "Home" link is present
  });
});
