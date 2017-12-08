import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import LazyRoute from "lazy-route";
import Remain from './remain'
import Movie from './movie'
export default class Routers extends React.Component {
  render() {
    return (
        <Switch>
            <Movie />
            <Remain />
        </Switch>
    );
  }
}
