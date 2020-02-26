import React from "react";
import "./App.css";
import { WildPokemon } from "./components/pages/WildPokemon";
import { MyPokemon } from "./components/pages/MyPokemon";
import { PokemonDetail } from "./components/pages/PokemonDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={WildPokemon} />
          <Route path="/my-pokemon" exact component={MyPokemon} />
          <Route path="/pokemon/:id" exact component={PokemonDetail} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
