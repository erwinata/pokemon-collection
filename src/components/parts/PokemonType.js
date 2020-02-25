import "./PokemonType.css";
import React from "react";
import { GetTypesImage } from "../helpers/PokemonType";

export const PokemonType = props => {
  return (
    <div className="PokemonType">
      {props.types[0] ? (
        <img src={GetTypesImage(props.types[0].type.name)}></img>
      ) : null}
      {props.types[1] ? (
        <img src={GetTypesImage(props.types[1].type.name)}></img>
      ) : null}
    </div>
  );
};
