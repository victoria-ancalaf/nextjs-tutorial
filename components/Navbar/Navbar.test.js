import React from 'react';
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe('Navbar', () => {
    test('renders Navbar component', () => {
      render(<Navbar />);
      expect(screen.getByAltText(/lemon.*? logo/i)).toBeInTheDocument();
      expect(screen.getByText(/Lemon/)).toBeInTheDocument();
    });
  });


  

