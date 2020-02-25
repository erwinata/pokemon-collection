import "./PokemonBigPreview.css";
import React from "react";

export const PokemonBigPreview = props => {
  return (
    <div className="PokemonBigPreview">
      <div className="Background">
        <img src={props.pokemon.img}></img>
      </div>
    </div>
  );
};
