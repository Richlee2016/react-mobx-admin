import React, { Components } from "react";
import { inject, observer } from "mobx-react";
import {Button} from 'antd'
import qs from 'querystring'
import "./login.less";

@inject("app")
@observer
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.app;
  }

  getInfo() {
    const sendData = {
      response_type: "code",
      client_id: 101435375,
      redirect_uri: encodeURI("http://173gg43187.iok.la/oauth/qq"),
      state: 'http://localhost:8083/'
    };
    const href = `https://graph.qq.com/oauth2.0/authorize?${qs.stringify(
      sendData
    )}`;
    location.href = href;
  }

  render() {
    return (
      <div className="login">
        this is login
        <Button type="primary" onClick={this.getInfo}>login</Button>
      </div>
    );
  }
}
