import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { ButtonRelease } from "./ButtonRelease";
import configureStore from "redux-mock-store";
import { mount, shallow } from "enzyme";
import { removePokemon } from "../../actions/pokemonAction";

const mockStore = configureStore([]);

describe("Function of Button Release is working", () => {
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
      },
      pokemonDetail: {
        pokemon: {
          id: 1,
          nickname: "Pokemon E",
          name: "Sample Pokemon"
        },
        hasPokemon: true
      }
    });

    store.dispatch = jest.fn();
  });

  it("should called removePokemon action", async () => {
    component = mount(
      <Provider store={store}>
        <ButtonRelease />
      </Provider>
    );

    component.find("button").simulate("click");
    expect(store.dispatch).toHaveBeenCalledWith(removePokemon(1));
  });
});
