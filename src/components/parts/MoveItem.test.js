import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MoveItem } from "./MoveItem";

describe("Render Move Item correctly", () => {
  let component;

  beforeEach(() => {});

  it("should render correctly", async () => {
    const move = {
      type: "normal",
      name: "Sample Move",
      pp: 99
    };

    component = render(<MoveItem move={move} />);
    expect(component).toMatchSnapshot();
  });
});
