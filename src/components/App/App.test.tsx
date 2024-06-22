import { App } from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("Text", () => {
    render(<App />);
    expect(screen.getByText("App")).toBeInTheDocument();
  });
});
