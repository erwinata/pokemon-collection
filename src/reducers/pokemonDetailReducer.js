const initialState = {
  pokemon: null,
  hasPokemon: false
};

export const pokemonDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_POKEMON_DETAIL":
      return (state = {
        pokemon: action.data,
        hasPokemon: state.hasPokemon
      });
    case "UPDATE_HAS_POKEMON":
      return (state = {
        pokemon: state.pokemon,
        hasPokemon: action.data
      });
    case "UPDATE_NICKNAME":
      let pokemonCopy = JSON.parse(JSON.stringify(state.pokemon));
      pokemonCopy.nickname = action.data;
      return (state = {
        pokemon: pokemonCopy,
        hasPokemon: action.data
      });

    default:
      return state;
  }
};

export default pokemonDetailReducer;
