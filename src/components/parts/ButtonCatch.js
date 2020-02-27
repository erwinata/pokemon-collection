import "./ButtonCatch.css";
import React from "react";
import Swal from "sweetalert2";
import { AddPokemon } from "../utils/ManagePokemon";
import { useSelector, useDispatch } from "react-redux";

export const RandomizerCatchChance = () => {
  if (Math.random() < 0.5) {
    return true;
  }
  return false;
};

export const PopupSuccess = async name => {
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

  return nickname;
};

export const PopupFail = async () => {
  Swal.fire({
    icon: "error",
    title: "Failed!",
    text: "Try to catch again!"
  });
};

export const CatchPokemon = async (success, pokemon, dispatch) => {
  if (success) {
    var nickname = await PopupSuccess(pokemon.name);
    AddPokemon(pokemon.id, nickname, dispatch);
  } else {
    PopupFail();
  }
};

export const ButtonCatch = () => {
  const pokemonDetail = useSelector(state => state.pokemonDetail);
  var dispatch = useDispatch();

  return (
    <button
      className="ButtonCatch"
      onClick={() =>
        CatchPokemon(RandomizerCatchChance(), pokemonDetail.pokemon, dispatch)
      }
    >
      CATCH
    </button>
  );
};
