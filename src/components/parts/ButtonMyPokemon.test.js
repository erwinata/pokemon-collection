import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { ButtonMyPokemon } from "./ButtonMyPokemon";
import configureStore from "redux-mock-store";
import { mount, shallow } from "enzyme";

const mockStore = configureStore([]);

describe("Render Button My Pokemon correctly", () => {
  let component;
  let store;

  beforeEach(() => {
    store = mockStore({
      myPokemon: {
        total: 5,
        pokemon: [
          {
            id: 1,
            nickname: "Pokemon A"
          },
          {
            id: 2,
            nickname: "Pokemon B"
          },
          {
            id: 3,
            nickname: "Pokemon C"
          },
          {
            id: 4,
            nickname: "Pokemon D"
          },
          {
            id: 5,
            nickname: "Pokemon E"
          }
        ]
      }
    });
  });

  it("should show correct total of my pokemon from global state", async () => {
    component = mount(
      <Provider store={store}>
        <ButtonMyPokemon />
      </Provider>
    );

    expect(component.find("span").text()).toEqual("5");
  });
});
