import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import LazyRoute from "lazy-route";
import Remain from './remain'
export default class Routers extends React.Component {
  render() {
    return (
      <div className="router-box">
        <Route
          path="/movie/home"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Movie/home")} />
          )}
        />
        <Route
          path="/movie/online"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Movie/online")} />
          )}
        />
        <Route
          path="/movie/log"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Movie/log")} />
          )}
        />
        <Route
          path="/movie/crawler"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Movie/crawler")} />
          )}
        />
        <Remain />
      </div>
    );
  }
}
