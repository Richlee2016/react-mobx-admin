import React from "react";
import { Route } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import { Redirect } from "react-router-dom";
import Index from "@/views/Index/index"
import Login from "@/views/Login/index"
@inject("app")
@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.app;
  }

  componentDidMount(){
    this.store.getSession();
  }

  // 处理session是否登录存在
  sessionExist = (username,pathname) => {
    if(!username){
      return <Redirect to="/login" />;
    }else{
      if (pathname === "/login") {
        return <Redirect to="/movie_home" />;
      }
    };
  };

  render() {
    const { session: { username } } = this.store;
    const { location: { pathname } } = this.props;
    return <div className="container">
        <Route path="/" component={Index} />} />
        <Route path="/login" component={Login} />} />
        {this.sessionExist(username,pathname)}
      </div>;
  }
}
