import React from 'react';
import { render, screen } from "@testing-library/react";
import About from "../pages/about";

describe('About', () => {
  test('renders About component', () => {
    render(<About />);
    expect(screen.getByText(/Lorem/)).toBeInTheDocument();
  });
});
