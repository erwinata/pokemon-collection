import React, { useEffect, useState } from "react";
import "../App.css";
import "../css/WildPokemon.css";
import { Link } from "react-router-dom";
import { GetTypesImage } from "../components/PokemonType";
import { useSelector, useDispatch } from "react-redux";
import { addPokemon } from "../actions";
import Axios from "axios";

const ButtonMyPokemon = () => {
  const myPokemon = useSelector(state => state);
  return (
    <div className="ButtonMyPokemon">
      <img src="/res/pokeball-icon.png"></img>
      <div className="Text">
        <h2>MY POKEMON</h2>
        <h1>
          {myPokemon.total} <span> / 983</span>
        </h1>
      </div>
    </div>
  );
};

const WildPokemonItem = props => {
  const dispatch = useDispatch();

  return (
    <div
      className="WildPokemonItem"
      // onClick={() => dispatch(addPokemon(props.data.id))}
    >
      <div className="PokemonSprite">
        <div className="Background">
          <img src={props.data.img}></img>
        </div>
      </div>
      <div className="PokemonInfo">
        <h1>{props.data.name}</h1>
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

export const WildPokemonContainer = () => {
  var [data, setData] = useState({
    loading: true,
    pokemons: []
  });

  var API = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    const fetchData = async () => {
      const reqs = [];
      for (var i = 1; i <= 20; i++) {
        const req = Axios.get(API + i);
        reqs.push(req);
      }

      const result = await Axios.all(reqs);

      for (var i = 0; i < result.length; i++) {
        let pokemon = {
          id: result[i].data.id,
          name: result[i].data.name,
          img: result[i].data.sprites.front_default,
          types: result[i].data.types
        };

        var temp = data.pokemons;
        temp.push(pokemon);

        setData({
          pokemons: temp,
          loading: false
        });
      }

      console.log(data);
    };

    fetchData();
  }, []);

  // async componentDidMount() {
  //   var API = "https://pokeapi.co/api/v2/pokemon/";
  //   var pokemonArr = [];

  //   for (let i = 0; i < 16; i++) {
  //     Axios.get(API + this.state.pokemonIndex)
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log("aaaa");
  //         var pokemon = {
  //           id: data.id,
  //           name: data.name,
  //           img: data.sprites.front_default,
  //           types: data.types
  //         };
  //         pokemonArr.push(pokemon);
  //         this.setState({
  //           loading: false,
  //           pokemons: pokemonArr,
  //           pokemonIndex: this.state.pokemonIndex + 1
  //         });
  //       })
  //       .catch(function(error) {});
  //     this.setState({
  //       pokemonIndex: this.state.pokemonIndex + 1
  //     });
  //   }
  // }

  return (
    <div>
      {data.loading ? (
        <div>Loading</div>
      ) : (
        <div className="WildPokemonContainer">
          {data.pokemons.map(data => (
            <Link to={"/pokemon/" + data.id}>
              <WildPokemonItem data={data} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const PageWildPokemon = () => {
  return (
    <div className="PageWildPokemon">
      <div className="title">
        <h1>Wild Pokemon</h1>
        <h2>Gotta catch 'em all</h2>
      </div>

      <WildPokemonContainer />
      <Link to="/my-pokemon">
        <ButtonMyPokemon />
      </Link>
    </div>
  );
};
