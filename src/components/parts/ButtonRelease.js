import "./ButtonRelease.css";
import React from "react";
import Swal from "sweetalert2";
import { RemovePokemon } from "../utils/ManagePokemon";
import { useSelector, useDispatch } from "react-redux";

export const PopupRelease = nickname => {
  Swal.fire({
    icon: "info",
    title: nickname + " has released"
  });
};

export const ReleasePokemon = (id, nickname, dispatch) => {
  PopupRelease(nickname);
  RemovePokemon(id, dispatch);
};

export const ButtonRelease = () => {
  const pokemonDetail = useSelector(state => state.pokemonDetail);
  var dispatch = useDispatch();

  return (
    <button
      className="BtnRelease"
      onClick={() =>
        ReleasePokemon(
          pokemonDetail.pokemon.id,
          pokemonDetail.pokemon.name,
          dispatch
        )
      }
    >
      RELEASE
    </button>
  );
};
