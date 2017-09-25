import React, { Component } from "react";
import RouterBox from "@/routers";
import { Header, Menus } from "@/components/Layout";
import { inject, observer } from "mobx-react";
import "./Index.less";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCollapsed: false
    };
    this.store = this.props.app;
  }

  toggleCollapsed = () => {
    this.setState({
      menuCollapsed: !this.state.menuCollapsed
    });
  };


  render() {
    const { menuCollapsed } = this.state;
    return (
      <div className="page-box">
        <div
          className={`menu-box ${menuCollapsed ? "menu-small" : "menu-big"}`}
        >
          <Menus collapsed={menuCollapsed} />
        </div>
        <div className="main-box">
          <div className="header-box">
            <Header handleFold={this.toggleCollapsed} />
          </div>
          <RouterBox />
        </div>
      </div>
    );
  }
}
