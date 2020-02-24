import React from "react";
import "./App.css";
import { PageWildPokemon } from "./pages/PageWildPokemon";
import { PageMyPokemon } from "./pages/PageMyPokemon";
import { PagePokemon } from "./pages/PagePokemon";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={PageWildPokemon} />
          <Route path="/my-pokemon" exact component={PageMyPokemon} />
          <Route path="/pokemon/:id" exact component={PagePokemon} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
