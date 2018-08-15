import React, { Component } from "react";
import { Route } from "react-router-dom";
import { MonsterOverview } from "../Components/_pages/MonsterOverview.Component";
import { MonsterEdit } from "../Components/_pages/MonsterEdit.Component";
import { AddMonster } from '../Components/_pages/AddMonster.Component';
import { MonsterDetails } from "../Components/_pages/MonsterDetails.Component";
import { HomePage } from '../Components/_pages/HomePage.Component';


class App extends Component {
  render() {
    return (
      <div id="wrapper">

        <Route exact path="/" component={HomePage} />
        <Route exact path="/monster-overview" component={MonsterOverview} />
        <Route exact path="/add-monster" component={AddMonster} />
        <Route exact path="/monster/:name" component={MonsterDetails} />
        <Route exact path="/monster/edit/:name" component={MonsterEdit} />

      </div>
    );
  }
}

export default App;
