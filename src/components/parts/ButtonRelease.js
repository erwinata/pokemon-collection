import "./ButtonRelease.css";
import React from "react";
import Swal from "sweetalert2";
import { addPokemon, releasePokemon } from "../../actions/pokemonAction";
import { useSelector, useDispatch } from "react-redux";

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

export const ButtonRelease = props => {
  var dispatch = useDispatch();

  return (
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
  );
};
