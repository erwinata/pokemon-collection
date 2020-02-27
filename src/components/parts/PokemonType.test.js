import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { PokemonType } from "./PokemonType";

describe("Render Type of Pokemon correctly", () => {
  let component;

  beforeEach(() => {});

  it("should render Normal Type", async () => {
    const types = [
      {
        type: {
          name: "normal"
        }
      }
    ];

    component = render(<PokemonType types={types} />);
    expect(component).toMatchSnapshot();
  });

  it("should render Normal and Fighting Type", async () => {
    const types = [
      {
        type: {
          name: "normal"
        }
      },
      {
        type: {
          name: "fighting"
        }
      }
    ];

    component = render(<PokemonType types={types} />);
    expect(component).toMatchSnapshot();
  });
});
