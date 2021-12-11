import {
  render,
  screen,
  waitForElementToBeRemoved
} from "@testing-library/react";
import Async from "./index";

it("renders correctly", async () => {
  render(<Async />);

  expect(screen.getByText("Hello World")).toBeInTheDocument();

  await waitForElementToBeRemoved(screen.queryByText("Button"));
});
