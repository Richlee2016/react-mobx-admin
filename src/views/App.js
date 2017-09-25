import React from "react";
import { Route} from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import {Redirect} from "react-router-dom";

@inject("app")
@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.app;
  }

  sessionExist= () => {
    const {session:{username}} = this.store;
    if(username){
      return <Redirect push to="/" />;
    }else{
      return <Redirect push to="/login" />;
    };
  }

  render() {
    return (
      <div className="container">
        <Route
          path="/"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Index/index")} />
          )}
        />
        <Route
          path="/login"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Login/index")} />
          )}
        />
        {this.sessionExist}
      </div>
    );
  }
}
