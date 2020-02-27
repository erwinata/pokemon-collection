import "./PokemonType.css";
import React from "react";
import { GetTypesImage } from "../utils/PokemonType";

export const PokemonType = props => {
  return (
    <div className="PokemonType">
      {props.types[0] ? (
        <img src={GetTypesImage(props.types[0].type.name)} alt="Pokemon Type" />
      ) : null}
      {props.types[1] ? (
        <img src={GetTypesImage(props.types[1].type.name)} alt="Pokemon Type" />
      ) : null}
    </div>
  );
};
