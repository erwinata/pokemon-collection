import "./PokemonDetailInfo.css";
import React from "react";
import { useSelector } from "react-redux";
import { MoveItem } from "../parts/MoveItem";
import { PokemonType } from "../parts/PokemonType";
import { ButtonCatch } from "../parts/ButtonCatch";
import { ButtonRelease } from "../parts/ButtonRelease";
import { ButtonBack } from "../parts/ButtonBack";
import { Link } from "react-router-dom";

export const PokemonDetailInfo = () => {
  var pokemonDetail = useSelector(state => state.pokemonDetail);

  return (
    <div className="PokemonDetailInfo">
      <h1>
        {pokemonDetail.pokemon.nickname === ""
          ? pokemonDetail.pokemon.name
          : pokemonDetail.pokemon.nickname}
      </h1>

      <PokemonType types={pokemonDetail.pokemon.types} />

      <hr></hr>

      <h2>MOVES LIST</h2>
      <div className="MovesList">
        {pokemonDetail.pokemon.moves.map(move => (
          <MoveItem move={move} key={move.name} />
        ))}
      </div>

      {pokemonDetail.pokemon ? (
        <div>
          {pokemonDetail.hasPokemon ? <ButtonRelease /> : <ButtonCatch />}
        </div>
      ) : null}
      <Link to="/" style={{ textDecoration: "none" }}>
        <ButtonBack />
      </Link>
    </div>
  );
};
