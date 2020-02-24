export const PokemonTypes = [
  { id: 1, src: "/res/poketype-normal.png", type: "normal" },
  { id: 2, src: "/res/poketype-fighting.png", type: "fighting" },
  { id: 3, src: "/res/poketype-flying.png", type: "flying" },
  { id: 4, src: "/res/poketype-poison.png", type: "poison" },
  { id: 5, src: "/res/poketype-ground.png", type: "ground" },
  { id: 6, src: "/res/poketype-rock.png", type: "rock" },
  { id: 7, src: "/res/poketype-bug.png", type: "bug" },
  { id: 8, src: "/res/poketype-ghost.png", type: "ghost" },
  { id: 9, src: "/res/poketype-steel.png", type: "steel" },
  { id: 10, src: "/res/poketype-fire.png", type: "fire" },
  { id: 11, src: "/res/poketype-water.png", type: "water" },
  { id: 12, src: "/res/poketype-grass.png", type: "grass" },
  { id: 13, src: "/res/poketype-electric.png", type: "electric" },
  { id: 14, src: "/res/poketype-psychic.png", type: "psychic" },
  { id: 15, src: "/res/poketype-ice.png", type: "ice" },
  { id: 16, src: "/res/poketype-dragon.png", type: "dragon" },
  { id: 17, src: "/res/poketype-dark.png", type: "dark" },
  { id: 18, src: "/res/poketype-fairy.png", type: "fairy" }
];

export const GetTypesImage = type => {
  for (var i = 0; i < PokemonTypes.length; i++) {
    if (type === PokemonTypes[i].type) {
      return PokemonTypes[i].src;
    }
  }
};

export default PokemonTypes;
