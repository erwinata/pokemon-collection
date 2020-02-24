export const addPokemon = (id, nickname) => {
  return {
    type: "ADD_POKEMON",
    data: {
      id: id,
      nickname: nickname
    }
  };
};

export const releasePokemon = (id, nickname) => {
  return {
    type: "RELEASE_POKEMON",
    data: {
      id: id
    }
  };
};
