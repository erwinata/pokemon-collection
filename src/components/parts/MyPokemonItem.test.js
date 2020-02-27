import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MyPokemonItem } from "./MyPokemonItem";

describe("Render My Pokemon Item correctly", () => {
  let component;

  beforeEach(() => {});

  it("should render pokemon data correctly", async () => {
    const data = {
      nickname: "SampleNickname",
      img: "/res/sample-pokemon.png",
      types: [
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
      ]
    };

    component = render(<MyPokemonItem data={data} />);
    expect(component).toMatchSnapshot();
  });
});
