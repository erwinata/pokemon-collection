import "./ButtonCatch.css";
import React from "react";
import Swal from "sweetalert2";
import { addPokemon, releasePokemon } from "../../actions/pokemonAction";
import { useSelector, useDispatch } from "react-redux";

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
  } else {
    Swal.fire({
      icon: "error",
      title: "Failed!",
      text: "Try to catch again!"
    });
  }
};

export const ButtonCatch = props => {
  var dispatch = useDispatch();

  return (
    <button
      className="ButtonCatch"
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
  );
};
