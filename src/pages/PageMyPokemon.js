import React, { Component } from "react";
import "../App.css";
import "../css/MyPokemon.css";
import { Link } from "react-router-dom";
import PokemonTypes from "../components/PokemonType";
import { useSelector, useDispatch } from "react-redux";
import { GetTypesImage } from "../components/PokemonType";

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

class MyPokemonContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonIndex: 1,
      loading: true,
      pokemons: []
    };
  }

  async componentDidMount() {
    console.log(this.props);
    // var myPokemon = useSelector(state => state);
    // var myPokemon = {
    //   total: 2,
    //   pokemon: [1, 2]
    // };
    var pokemonArr = [];
    var API = "https://pokeapi.co/api/v2/pokemon/";

    for (var i = 0; i < this.props.myPokemon.total; i++) {
      await fetch(API + this.props.myPokemon.pokemon[i].id)
        .then(res => res.json())
        .then(data => {
          var pokemon = {
            id: data.id,
            nickname: this.props.myPokemon.pokemon[i].nickname,
            name: data.name,
            img: data.sprites.front_default,
            types: data.types
          };

          pokemonArr.push(pokemon);

          this.setState({
            loading: false,
            pokemons: pokemonArr,
            pokemonIndex: this.state.pokemonIndex + 1
          });
        })
        .catch(function(error) {});
    }
  }

  render() {
    if (this.state.loading) {
      return <div>Loading</div>;
    }
    return (
      <div className="MyPokemonContainer">
        {this.state.pokemons.map(data => (
          <Link to={"/pokemon/" + data.id}>
            <MyPokemonItem data={data} />
          </Link>
        ))}
      </div>
    );
  }
}

export const PageMyPokemon = () => {
  var myPokemon = useSelector(state => state);

  return (
    <div className="PageMyPokemon">
      <div className="title">
        <h1>My Pokemon</h1>
        <h2>See all your pokemons here</h2>
      </div>

      <MyPokemonContainer myPokemon={myPokemon} />
      <Link to="/"></Link>
    </div>
  );
};
