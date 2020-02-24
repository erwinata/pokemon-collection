import React, { useState, useEffect } from "react";
import "../App.css";
import "../css/MyPokemon.css";
import { Link } from "react-router-dom";
import PokemonTypes from "../components/PokemonType";
import { useSelector, useDispatch } from "react-redux";
import { GetTypesImage } from "../components/PokemonType";
import Axios from "axios";
import Loading from "../components/Loading";

const ButtonBack = () => {
  return (
    <div className="ButtonBack">
      <div className="Text">
        <h1>BACK</h1>
      </div>
    </div>
  );
};

const MyPokemonItem = props => {
  return (
    <div className="MyPokemonItem">
      <div className="PokemonSprite">
        <div className="Background">
          <img src={props.data.img}></img>
        </div>
      </div>
      <div className="PokemonInfo">
        <h1>{props.data.nickname}</h1>
        <div className="TypeContainer">
          {props.data.types[0] ? (
            <img src={GetTypesImage(props.data.types[0].type.name)}></img>
          ) : null}
          {props.data.types[1] ? (
            <img src={GetTypesImage(props.data.types[1].type.name)}></img>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const MyPokemonContainer = props => {
  var [state, setState] = useState({
    loading: true,
    pokemons: []
  });

  var API = "https://pokeapi.co/api/v2/pokemon/";

  console.log(props);

  useEffect(() => {
    const fetchData = async () => {
      const reqs = [];
      for (var i = 0; i < props.myPokemon.total; i++) {
        const req = Axios.get(API + props.myPokemon.pokemon[i].id);
        reqs.push(req);
      }

      const result = await Axios.all(reqs);

      for (var i = 0; i < result.length; i++) {
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

      console.log(state);
    };

    fetchData();
  }, []);

  if (props.myPokemon.total == 0) {
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
          <MyPokemonItem data={data} />
        </Link>
      ))}
    </div>
  );
};

export const PageMyPokemon = () => {
  var myPokemon = useSelector(state => state);

  return (
    <div className="PageMyPokemon">
      <div className="title">
        <h1>My Pokemon</h1>
      </div>

      <MyPokemonContainer myPokemon={myPokemon} />
      <Link to="/" style={{ textDecoration: "none" }}>
        <ButtonBack />
      </Link>
    </div>
  );
};
