import React, { useEffect, useState } from "react";
import "../App.css";
import "../css/Pokemon.css";
import { Link } from "react-router-dom";
import PokemonTypes from "../components/PokemonType";
import { useSelector, useDispatch } from "react-redux";
import { GetTypesImage } from "../components/PokemonType";
import { RouteComponentProps } from "react-router";
import { addPokemon, releasePokemon } from "../actions";
import Axios from "axios";

export const PokemonInfo = props => {
  // const [data, setData] = useState([]);

  // var API = "https://pokeapi.co/api/v2/pokemon/";
  // var loading = true;

  // useEffect(() => {
  //   // if (loading) {
  //   async function tes() {
  //     Axios.get(API + 4).then(res => {
  //       setData([...data, res.data]);
  //       console.log(data);
  //       loading = false;
  //     });
  //   }
  //   // tes();

  //   // }
  // });

  return (
    <div className="PokemonInfo">
      {/* <h1>{data[0] ? data[0].name : ""}</h1> */}
      <div className="TypeContainer">
        {/* {props.data.types[0] ? (
          <img src={GetTypesImage(props.data.types[0].type.name)}></img>
        ) : null}
        {props.data.types[1] ? (
          <img src={GetTypesImage(props.data.types[1].type.name)}></img>
        ) : null} */}
      </div>
    </div>
  );
};

export const ReleasePokemon = (id, dispatch, data, setData) => {
  dispatch(releasePokemon(id));

  setData({
    pokemon: data.pokemon,
    hasPokemon: false,
    loading: false
  });
};

export const AddPokemon = (id, dispatch, data, setData) => {
  if (Math.random() < 0.5) {
    var nickname = prompt("Please enter your name", "");

    dispatch(addPokemon(id, nickname));

    setData({
      pokemon: data.pokemon,
      hasPokemon: true,
      loading: false
    });
  }
};

export const PagePokemon = props => {
  var myPokemon = useSelector(state => state);
  var dispatch = useDispatch();

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

      for (let pokemon of myPokemon.pokemon) {
        if (pokemon.id === result.data.id) hasPokemon = true;
      }

      setData({
        pokemon: result.data,
        hasPokemon: hasPokemon,
        loading: false
      });

      console.log(myPokemon);
    };

    fetchData();
  }, []);

  return (
    <div className="PagePokemon">
      {data.pokemon ? (
        <div>
          <h1>{data.pokemon ? data.pokemon.name : ""}</h1>
          {data.hasPokemon ? (
            <button
              onClick={() =>
                ReleasePokemon(data.pokemon.id, dispatch, data, setData)
              }
            >
              Release
            </button>
          ) : (
            <button
              onClick={() =>
                AddPokemon(data.pokemon.id, dispatch, data, setData)
              }
            >
              Catch
            </button>
          )}
        </div>
      ) : null}

      <Link to="/"></Link>
      <PokemonInfo />
    </div>
  );
};
