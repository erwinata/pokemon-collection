import React, { useState, useEffect } from "react";
import "./MyPokemonItem.css";
import { PokemonType } from "./PokemonType";

export const MyPokemonItem = props => {
  return (
    <div className="MyPokemonItem">
      <div className="PokemonSprite">
        <div className="Background">
          <img src={props.data.img}></img>
        </div>
      </div>
      <div className="PokemonInfo">
        <h1>{props.data.nickname}</h1>
        <PokemonType types={props.data.types} />
      </div>
    </div>
  );
};
