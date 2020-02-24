const initialState = {
  total: 0,
  pokemon: []
};

export const myPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CACHE_WILD_POKEMON":
      return (state = {
        total: state.total + 1,
        pokemon: [...state.pokemon, action.data]
      });
    default:
      return state;
  }
};

export default myPokemonReducer;
