import { combineReducers } from "redux";
import { myPokemonReducer } from "./myPokemonReducer";
import { pokemonDetailReducer } from "./pokemonDetailReducer";

export const allReducer = combineReducers({
  myPokemon: myPokemonReducer,
  pokemonDetail: pokemonDetailReducer
});
