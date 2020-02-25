import "./WildPokemonItem.css";
import React from "react";

export const WildPokemonItem = props => {
  return (
    <div
      className={
        props.data.hasPokemon ? "WildPokemonItem hasPokemon" : "WildPokemonItem"
      }
    >
      <div className="PokemonSprite">
        <div className="Background">
          <img src={props.data.img}></img>
        </div>
      </div>
    </div>
  );
};
