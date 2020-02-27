const initialState = {
  total: 0,
  pokemon: []
};

export const myPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POKEMON":
      return (state = {
        total: state.total + 1,
        pokemon: [...state.pokemon, action.data]
      });
    case "REMOVE_POKEMON":
      var array = [...state.pokemon];

      var index = -1;
      for (var i = 0; i < array.length; i++) {
        if (array[i].id === action.data.id) {
          index = i;
        }
      }
      if (index !== -1) {
        array.splice(index, 1);
        return (state = {
          total: state.total - 1,
          pokemon: array
        });
      }
      return state;

    default:
      return state;
  }
};

export default myPokemonReducer;
