import { render } from "@testing-library/react";
import Home from "../pages/index";

describe('Home', () => {
  test('renders Home component', () => {
    render(<Home />);
  });
});
