import "./ButtonMyPokemon.css";
import React from "react";
import { useSelector } from "react-redux";

export const ButtonMyPokemon = () => {
  const myPokemon = useSelector(state => state.myPokemon);

  return (
    <div className="ButtonMyPokemon">
      <h2>MY POKEMON</h2>
      <h1>
        <img src="/res/pokeball-icon.png" alt="Pokeball"></img>
        <span>{myPokemon.total}</span>
      </h1>
    </div>
  );
};
