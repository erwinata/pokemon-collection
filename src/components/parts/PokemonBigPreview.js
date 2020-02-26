import "./PokemonBigPreview.css";
import React from "react";
import { useSelector } from "react-redux";

export const PokemonBigPreview = () => {
  var pokemonDetail = useSelector(state => state.pokemonDetail);

  return (
    <div className="PokemonBigPreview">
      <div className="Background">
        <img src={pokemonDetail.pokemon.img} alt="Pokemon Sprite"></img>
      </div>
    </div>
  );
};
