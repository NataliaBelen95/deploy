import "./App.css";
import { Home, Detail, Landing, NewPokemon } from "./components/views/index";
import { Route, Switch } from "react-router-dom"; // se mueve dentro de lo que envuelve switch
import NavBar from "./components/views/Home/NavBar/NavBar";
import Cards from "./components/views/Home/Cards/Cards";
import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}></Route>

        <Route>
          <NavBar />
          <Switch>
            <Route exact path="/Pokes" component={Cards}></Route>
            <Route exact path="/aboutMe" component={AboutMe}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/detail/:id" component={Detail}></Route>
            <Route exact path="/createPoke" component={NewPokemon}></Route>
          </Switch>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
