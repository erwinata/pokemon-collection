import "./ButtonMyPokemon.css";
import React from "react";
import { useSelector } from "react-redux";

export const ButtonMyPokemon = () => {
  const myPokemon = useSelector(state => state);
  return (
    <div className="ButtonMyPokemon">
      <div className="Text">
        <h2>MY POKEMON</h2>
        <h1>
          <img src="/res/pokeball-icon.png"></img>
          {myPokemon.total}
        </h1>
      </div>
    </div>
  );
};
