import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { WildPokemonItem } from "./WildPokemonItem";
import { mount } from "enzyme";

describe("Render Wild Pokemon correctly", () => {
  let component;

  beforeEach(() => {});

  it("should render available when don't have the pokemon", async () => {
    const pokemon = {
      id: 1,
      nickname: "",
      hasPokemon: false,
      name: "SamplePokemon",
      img: "/res/sample-pokemon.png"
    };

    component = mount(<WildPokemonItem data={pokemon} />);
    expect(
      component.find(".WildPokemonItem").hasClass("unavailable")
    ).not.toBeTruthy();
  });

  it("should render unavailable when have the pokemon", async () => {
    const pokemon = {
      id: 1,
      nickname: "",
      hasPokemon: true,
      name: "SamplePokemon",
      img: "/res/sample-pokemon.png"
    };

    component = mount(<WildPokemonItem data={pokemon} />);
    expect(
      component.find(".WildPokemonItem").hasClass("unavailable")
    ).toBeTruthy();
  });
});
