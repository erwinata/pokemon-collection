// export const cacheWildPokemon = (id, nickname) => {
//   return {
//     type: "CACHE_WILD_POKEMON",
//     data: {
//       id: id,
//       nickname: nickname
//     }
//   };
// };

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
