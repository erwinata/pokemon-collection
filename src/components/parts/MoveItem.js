import "./MoveItem.css";
import React from "react";
import { GetTypesImage } from "../helpers/PokemonType";

export const MoveItem = props => {
  console.log(props);
  return (
    <div className="MoveItem">
      <img src={GetTypesImage(props.move.type)}></img>
      {props.move.name}
      <span>
        <small>PP</small>
        {props.move.pp}
      </span>
    </div>
  );
};
