import {
  addPokemon,
  removePokemon,
  updateHasPokemon,
  updateNickname
} from "../../actions/pokemonAction";

export const AddPokemon = (id, nickname, dispatch) => {
  dispatch(addPokemon(id, nickname));
  dispatch(updateHasPokemon(true));
  dispatch(updateNickname(nickname));
};

export const RemovePokemon = (id, dispatch) => {
  dispatch(removePokemon(id));
  dispatch(updateHasPokemon(false));
  dispatch(updateNickname(""));
};
