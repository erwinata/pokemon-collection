import "./PokemonDetail.css";

import React, { useEffect, useState } from "react";
import { GetTypesImage } from "../helpers/PokemonType";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import Loading from "../parts/Loading";
import { PokemonBigPreview } from "../parts/PokemonBigPreview";
import { PokemonDetailInfo } from "../parts/PokemonDetailInfo";

export const PokemonDetail = props => {
  var myPokemon = useSelector(state => state);

  var id = props.match.params.id;

  var [data, setData] = useState({
    pokemon: null,
    hasPokemon: false,
    loading: true
  });

  var API = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
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

      for (var i = 0; i < resultMove.length; i++) {
        let move = {
          name: resultMove[i].data.names[2].name,
          type: resultMove[i].data.type.name,
          pp: resultMove[i].data.pp
        };

        moves.push(move);
      }

      setData({
        pokemon: {
          id: result.data.id,
          nickname: pokemonName,
          name: result.data.name.toUpperCase(),
          img: result.data.sprites.front_default,
          types: result.data.types,
          moves: moves
        },
        hasPokemon: hasPokemon,
        loading: false
      });

      console.log(myPokemon);
    };

    fetchData();
  }, []);

  return (
    <div className="PokemonDetail">
      {data.loading ? (
        <Loading />
      ) : (
        <div className="PokemonContainer">
          <PokemonBigPreview pokemon={data.pokemon} />
          <PokemonDetailInfo data={data} setData={setData} />
        </div>
      )}
    </div>
  );
};
