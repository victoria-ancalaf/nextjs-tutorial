import React from 'react';
import { render } from "@testing-library/react";
import About from "../pages/about";

test("loads items eventually", async () => {
  render(<About />);
});

