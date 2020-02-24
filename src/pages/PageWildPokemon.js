import React, { useEffect, useState } from "react";
import "../App.css";
import "../css/WildPokemon.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import Loading from "../components/Loading";

const ButtonMyPokemon = () => {
  const myPokemon = useSelector(state => state);
  return (
    <div className="ButtonMyPokemon">
      <div className="Text">
        <h2>MY POKEMON</h2>
        <h1>
          <img src="/res/pokeball-icon.png"></img>
          {myPokemon.total}
        </h1>
      </div>
    </div>
  );
};

const WildPokemonItem = props => {
  const dispatch = useDispatch();

  return (
    <div
      className={
        props.data.hasPokemon ? "WildPokemonItem hasPokemon" : "WildPokemonItem"
      }
      // onClick={() => dispatch(addPokemon(props.data.id))}
    >
      <div className="PokemonSprite">
        <div className="Background">
          <img src={props.data.img}></img>
        </div>
      </div>
      {/* <div className="PokemonInfo">
        <h1>{props.data.name}</h1>
        <div className="TypeContainer">
          {props.data.types[0] ? (
            <img src={GetTypesImage(props.data.types[0].type.name)}></img>
          ) : null}
          {props.data.types[1] ? (
            <img src={GetTypesImage(props.data.types[1].type.name)}></img>
          ) : null}
        </div>
      </div> */}
    </div>
  );
};

export const WildPokemonContainer = () => {
  const myPokemon = useSelector(state => state);

  var [data, setData] = useState({
    loading: true,
    pokemons: []
  });

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop <=
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
    console.log(isFetching);
  }

  var [isFetching, setIsFetching] = useState(true);

  var API = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const fetchPokemon = async () => {
      console.log("FETCHHHH");
      const reqs = [];

      var totalPokemonToLoad = 96;
      if (!data.loading) totalPokemonToLoad = 30;

      for (
        var i = data.pokemons.length + 1;
        i <= data.pokemons.length + totalPokemonToLoad;
        i++
      ) {
        if (data.pokemons.length < i) {
          const req = Axios.get(API + i);
          reqs.push(req);
        }
      }

      const result = await Axios.all(reqs);

      for (var i = 0; i < result.length; i++) {
        var hasPokemon = false;
        for (let pokemon of myPokemon.pokemon) {
          if (pokemon.id === result[i].data.id) {
            hasPokemon = true;
          }
        }

        let pokemon = {
          id: result[i].data.id,
          name: result[i].data.name,
          img: result[i].data.sprites.front_default,
          types: result[i].data.types,
          hasPokemon: hasPokemon
        };

        var temp = data.pokemons;
        temp.push(pokemon);

        setData({
          pokemons: temp,
          loading: false
        });
        setIsFetching(false);
      }

      console.log(data);
    };
    console.log("Fetch more list items!");

    if (!isFetching) return;
    fetchPokemon();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching]);

  return (
    <div>
      {data.loading ? (
        <Loading />
      ) : (
        <div className="WildPokemonContainer">
          {data.pokemons.map(data => (
            <Link to={"/pokemon/" + data.id}>
              <WildPokemonItem data={data} />
            </Link>
          ))}
          {isFetching ? <Loading /> : null}
        </div>
      )}
    </div>
  );
};

export const PageWildPokemon = () => {
  return (
    <div className="PageWildPokemon">
      <div className="title">
        <h1>WILD Pokemon</h1>
      </div>

      <WildPokemonContainer />
      <Link to="/my-pokemon">
        <ButtonMyPokemon />
      </Link>
    </div>
  );
};
