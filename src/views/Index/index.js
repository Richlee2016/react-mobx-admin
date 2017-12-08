import React, { Component } from "react";
import { Header, Menus } from "@/components/Layout";
import { inject, observer } from "mobx-react";
import config from "@/config";
import RouterCom from "@/router"
import "./Index.less";
import { Switch } from "react-router-dom";

@inject("app")
@observer
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCollapsed: false
    };
    this.store = this.props.app;
  }
  // 监控视口宽度
  componentDidMount() {
    this.winHandle(1360);
    const that = this;
    window.addEventListener(
      "resize",
      function() {
        that.winHandle(1360);
      },
      false
    );
  }
  // 计算窗口
  winHandle(w) {
    const bodyWidth = document.documentElement.clientWidth;
    if (bodyWidth < w) {
      this.setState({
        menuCollapsed: true
      });
    }
  }
  // 收缩menu
  toggleCollapsed = () => {
    this.setState({
      menuCollapsed: !this.state.menuCollapsed
    });
  };
  //视图
  render() {
    const { menuCollapsed } = this.state;
    const { LogOut,user} = this.store;
    return (
      <div className="page-box">
        <div
          className={`menu-box ${menuCollapsed ? "menu-small" : "menu-big"}`}
        >
          {user?<Menus collapsed={menuCollapsed} menus={config.menus} user={user} />:null}
        </div>
        <div className="main-box">
          <div className="header-box">
            {user?<Header
              handleFold={this.toggleCollapsed}
              logout={LogOut}
              collapsed={menuCollapsed}
            />:null}
          </div>
          <RouterCom />
        </div>
      </div>
    );
  }
}
