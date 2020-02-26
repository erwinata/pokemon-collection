import "./PokemonDetail.css";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import Loading from "../parts/Loading";
import { PokemonBigPreview } from "../parts/PokemonBigPreview";
import { PokemonDetailInfo } from "../parts/PokemonDetailInfo";
import {
  registerPokemonDetail,
  updateHasPokemon
} from "../../actions/pokemonAction";

export const PokemonDetail = props => {
  var myPokemon = useSelector(state => state.myPokemon);
  var dispatch = useDispatch();

  var id = props.match.params.id;

  var [data, setData] = useState({
    loading: true
  });

  useEffect(() => {
    var API = "https://pokeapi.co/api/v2/pokemon/";

    const fetchData = async () => {
      const result = await Axios.get(API + id);

      var hasPokemon = false;
      var pokemonName = "";
      for (let pokemon of myPokemon.pokemon) {
        if (pokemon.id === result.data.id) {
          hasPokemon = true;
          pokemonName = pokemon.nickname;
        }
      }

      var reqs = [];
      for (var i = 0; i < 4; i++) {
        var APImoves = result.data.moves[i].move.url;
        const req = Axios.get(APImoves);
        reqs.push(req);
      }

      const resultMove = await Axios.all(reqs);

      var moves = [];

      for (i = 0; i < resultMove.length; i++) {
        let move = {
          name: resultMove[i].data.names[2].name,
          type: resultMove[i].data.type.name,
          pp: resultMove[i].data.pp
        };

        moves.push(move);
      }

      var pokemonDetail = {
        id: result.data.id,
        nickname: pokemonName,
        name: result.data.name.toUpperCase(),
        img: result.data.sprites.front_default,
        types: result.data.types,
        moves: moves
      };
      dispatch(registerPokemonDetail(pokemonDetail));
      dispatch(updateHasPokemon(hasPokemon));

      setData({
        loading: false
      });
    };

    fetchData();
  }, []);

  return (
    <div className="PokemonDetail">
      {data.loading ? (
        <Loading />
      ) : (
        <div className="PokemonContainer">
          <PokemonBigPreview />
          <PokemonDetailInfo />
        </div>
      )}
    </div>
  );
};
