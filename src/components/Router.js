import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";

const Router = () => (

    <BrowserRouter>
      <Switch>
         <Route path="/" compnent={App} exact />
         <Route path="/recipe/:id" compnent={Recipe} />
      </Switch>
    </BrowserRouter>
);

export default Router;