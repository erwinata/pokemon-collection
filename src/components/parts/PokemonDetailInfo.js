import "./PokemonDetailInfo.css";
import React from "react";
import { GetTypesImage } from "../helpers/PokemonType";
import { useSelector, useDispatch } from "react-redux";
import { MoveItem } from "../parts/MoveItem";
import { PokemonType } from "../parts/PokemonType";
import { ButtonCatch } from "../parts/ButtonCatch";
import { ButtonRelease } from "../parts/ButtonRelease";
import { ButtonBack } from "../parts/ButtonBack";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const PokemonDetailInfo = props => {
  return (
    <div className="PokemonDetailInfo">
      <h1>
        {props.data.pokemon.nickname === ""
          ? props.data.pokemon.name
          : props.data.pokemon.nickname}
      </h1>

      <PokemonType types={props.data.pokemon.types} />

      <hr></hr>

      <h2>MOVES LIST</h2>
      <div className="MovesList">
        {props.data.pokemon.moves.map(move => (
          <MoveItem move={move} />
        ))}
      </div>

      {props.data.pokemon ? (
        <div>
          {props.data.hasPokemon ? (
            <ButtonRelease data={props.data} setData={props.setData} />
          ) : (
            <ButtonCatch data={props.data} setData={props.setData} />
          )}
        </div>
      ) : null}
      <Link to="/" style={{ textDecoration: "none" }}>
        <ButtonBack />
      </Link>
    </div>
  );
};
