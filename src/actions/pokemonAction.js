export const registerPokemonDetail = data => {
  return {
    type: "REGISTER_POKEMON_DETAIL",
    data: data
  };
};

export const updateHasPokemon = data => {
  return {
    type: "UPDATE_HAS_POKEMON",
    data: data
  };
};

export const updateNickname = data => {
  return {
    type: "UPDATE_NICKNAME",
    data: data
  };
};

export const addPokemon = (id, nickname) => {
  return {
    type: "ADD_POKEMON",
    data: {
      id: id,
      nickname: nickname
    }
  };
};

export const releasePokemon = id => {
  return {
    type: "RELEASE_POKEMON",
    data: {
      id: id
    }
  };
};
