import { render } from "@testing-library/react";
import HomeBtn from "./HomeBtn";

it("check button render", () => {
  const { queryByText } = render(<HomeBtn />);
  const btn = queryByText("See Lemon Listing");
  expect(btn).toBeTruthy();
});

