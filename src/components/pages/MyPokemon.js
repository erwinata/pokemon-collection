import React, { useState, useEffect } from "react";
import "./MyPokemon.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Axios from "axios";
import Loading from "../parts/Loading";
import { ButtonBack } from "../parts/ButtonBack";
import { PageTitle } from "../parts/PageTitle";
import { MyPokemonItem } from "../parts/MyPokemonItem";

const MyPokemonContainer = props => {
  var [state, setState] = useState({
    loading: true,
    pokemons: []
  });

  var API = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    const fetchData = async () => {
      const reqs = [];
      for (var i = 0; i < props.myPokemon.total; i++) {
        const req = Axios.get(API + props.myPokemon.pokemon[i].id);
        reqs.push(req);
      }

      const result = await Axios.all(reqs);

      for (i = 0; i < result.length; i++) {
        let pokemon = {
          id: result[i].data.id,
          nickname: props.myPokemon.pokemon[i].nickname,
          name: result[i].data.name,
          img: result[i].data.sprites.front_default,
          types: result[i].data.types
        };

        var temp = state.pokemons;
        temp.push(pokemon);

        setState({
          pokemons: temp,
          loading: false
        });
      }
    };

    fetchData();
  }, []);

  if (props.myPokemon.total === 0) {
    return (
      <div>
        Oops! You don't have any pokemon
        <br />
        Go catch some!
      </div>
    );
  }
  if (state.loading) {
    return <Loading />;
  }
  return (
    <div className="MyPokemonContainer">
      {state.pokemons.map(data => (
        <Link to={"/pokemon/" + data.id} style={{ textDecoration: "none" }}>
          <MyPokemonItem data={data} key={data.id} />
        </Link>
      ))}
    </div>
  );
};

export const MyPokemon = () => {
  var myPokemon = useSelector(state => state.myPokemon);

  return (
    <div className="MyPokemon">
      <PageTitle text="MY POKEMON" />

      <MyPokemonContainer myPokemon={myPokemon} />

      <Link to="/" style={{ textDecoration: "none" }}>
        <ButtonBack />
      </Link>
    </div>
  );
};
