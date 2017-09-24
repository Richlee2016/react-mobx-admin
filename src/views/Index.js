import React, { Component } from "react";
import RouterBox from "@/routers"
import {Header} from '@/components/Layout'
import "./Index.less";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="menu"></div>
        <div className="main">
          <RouterBox />
        </div>
      </div>
    );
  }
}
