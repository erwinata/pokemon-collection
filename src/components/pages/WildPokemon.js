import "./WildPokemon.css";

import React from "react";
import { Link } from "react-router-dom";
import { ButtonMyPokemon } from "../parts/ButtonMyPokemon";
import { WildPokemonContainer } from "../parts/WildPokemonContainer";
import { PageTitle } from "../parts/PageTitle";

export const WildPokemon = () => {
  return (
    <div className="PageWildPokemon">
      <PageTitle text="WILD POKEMON" />

      <WildPokemonContainer />
      <Link to="/my-pokemon">
        <ButtonMyPokemon />
      </Link>
    </div>
  );
};
