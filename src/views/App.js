import React from "react";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import { Route, Redirect } from "react-router-dom";
import Index from "@/views/Index/index";
import Login from "@/views/Login/index";
@inject("app")
@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.app;
  }

  componentDidMount() {
    this.store.Login(location.hash);
  }

  render() {
    const { user } = this.store;
    return (
      <div className="container">
        <Route path="/" component={Index} />
        {user ? null : <Login />}
      </div>
    );
  }
}
