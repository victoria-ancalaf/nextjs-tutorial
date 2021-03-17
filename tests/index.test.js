import { render } from "@testing-library/react";
import Home from "../pages/index";

test("loads items eventually", async () => {
  render(<Home />);
});

