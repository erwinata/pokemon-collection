import "./ButtonCatch.css";
import React from "react";
import Swal from "sweetalert2";
import {
  addPokemon,
  updateHasPokemon,
  updateNickname
} from "../../actions/pokemonAction";
import { useSelector, useDispatch } from "react-redux";

export const CatchPokemon = async (pokemon, dispatch) => {
  var name = pokemon.name;
  var id = pokemon.id;

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

    AddPokemon(id, nickname, dispatch);
  } else {
    Swal.fire({
      icon: "error",
      title: "Failed!",
      text: "Try to catch again!"
    });
  }
};

export const AddPokemon = async (id, nickname, dispatch) => {
  dispatch(addPokemon(id, nickname));
  dispatch(updateHasPokemon(true));
  dispatch(updateNickname(nickname));
};

export const ButtonCatch = props => {
  const pokemonDetail = useSelector(state => state.pokemonDetail);
  var dispatch = useDispatch();

  return (
    <button
      className="ButtonCatch"
      onClick={() => CatchPokemon(pokemonDetail.pokemon, dispatch)}
    >
      CATCH
    </button>
  );
};
