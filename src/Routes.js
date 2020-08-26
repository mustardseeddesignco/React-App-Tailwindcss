import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Test from "./pages/test";
import About from "./pages/about";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/test" exact component={Test} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
