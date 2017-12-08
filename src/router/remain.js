import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import LazyRoute from "lazy-route";

export default class test extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/user"
          render={props => (
            <LazyRoute {...props} component={import("@/views/User")} />
          )}
        />
      </Switch>
    );
  }
}
