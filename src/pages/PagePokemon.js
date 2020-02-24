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
import Swal from "sweetalert2";
import Loading from "../components/Loading";

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

export const PokemonInfo = props => {
  // console.log(props);

  var dispatch = useDispatch();

  return (
    <div className="PokemonInfo">
      <h1>
        {props.data.pokemon.nickname === ""
          ? props.data.pokemon.name
          : props.data.pokemon.nickname}
      </h1>

      <div className="TypeContainer">
        {props.data.pokemon.types[0] ? (
          <img src={GetTypesImage(props.data.pokemon.types[0].type.name)}></img>
        ) : null}
        {props.data.pokemon.types[1] ? (
          <img src={GetTypesImage(props.data.pokemon.types[1].type.name)}></img>
        ) : null}
      </div>

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
            <button
              className="BtnRelease"
              onClick={() =>
                ReleasePokemon(
                  props.data.pokemon.id,
                  props.data.pokemon.name,
                  dispatch,
                  props.data,
                  props.setData
                )
              }
            >
              RELEASE
            </button>
          ) : (
            <button
              className="BtnCatch"
              onClick={() =>
                AddPokemon(
                  props.data.pokemon.id,
                  props.data.pokemon.name,
                  dispatch,
                  props.data,
                  props.setData
                )
              }
            >
              CATCH
            </button>
          )}
        </div>
      ) : null}
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="BtnBack">BACK</button>
      </Link>
    </div>
  );
};

export const ReleasePokemon = (id, nickname, dispatch, data, setData) => {
  Swal.fire({
    icon: "info",
    title: nickname + " has released"
  });

  dispatch(releasePokemon(id));

  var pokemon = data.pokemon;
  pokemon.nickname = "";

  setData({
    pokemon: data.pokemon,
    hasPokemon: false,
    loading: false
  });
};

export const AddPokemon = async (id, name, dispatch, data, setData) => {
  if (Math.random() < 0.5) {
    const { value: nickname } = await Swal.fire({
      title: "Success!",
      html: name + " successfully caught!<br>Give it a nickname!",
      input: "text",
      icon: "success",
      inputValue: name,
      inputAttributes: {
        autocapitalize: "on"
      },
      showCancelButton: false,
      confirmButtonText: "OK"
    });

    dispatch(addPokemon(id, nickname));

    var pokemon = data.pokemon;
    pokemon.nickname = nickname;

    setData({
      pokemon: pokemon,
      hasPokemon: true,
      loading: false
    });

    // swal({
    //   title: "Bulbasaur successfully caught!",
    //   text: "Give him a nickname!",
    //   content: "input",
    //   icon: "success"
    // }).then(name => {
    //   dispatch(addPokemon(id, name));
    //   setData({
    //     pokemon: data.pokemon,
    //     hasPokemon: true,
    //     loading: false
    //   });
    // });
  } else {
    Swal.fire({
      icon: "error",
      title: "Failed!",
      text: "Try to catch again!"
    });
  }
};

export const PokemonPreview = props => {
  return (
    <div className="PokemonPreview">
      <div className="Background">
        <img src={props.pokemon.img}></img>
      </div>
    </div>
  );
};

export const PagePokemon = props => {
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
    <div className="PagePokemon">
      {data.loading ? (
        <Loading />
      ) : (
        <div className="PokemonContainer">
          <PokemonPreview pokemon={data.pokemon} />
          <PokemonInfo data={data} setData={setData} />
        </div>
      )}
    </div>
  );
};
