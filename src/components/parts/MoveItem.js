import "./MoveItem.css";
import React from "react";
import { GetTypesImage } from "../helpers/PokemonType";

export const MoveItem = props => {
  return (
    <div className="MoveItem">
      <img src={GetTypesImage(props.move.type)} alt="Move Type"></img>
      {props.move.name}
      <span>
        <small>PP</small>
        {props.move.pp}
      </span>
    </div>
  );
};
