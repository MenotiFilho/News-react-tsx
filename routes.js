import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Categories from "./src/components/pages/Categories";
import New from "./src/components/pages/New";
import Popular from "./src/components/pages/Popular";
import Trending from "./src/components/pages/Trending";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={New} path="/new" />
      <Route component={Popular} path="/popular" />
      <Route component={Trending} path="/trending" />
      <Route component={Categories} path="/categories" />
    </BrowserRouter>
  );
};

export default Routes;
