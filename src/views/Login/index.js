import React,{Components} from 'react'
import { inject, observer } from "mobx-react";
import {withRouter} from "react-router-dom"
import './login.less'



@inject("app")
@observer
export default class Login extends React.Component {

    constructor(props){
        super(props)
        this.store = this.props.app;
    }

    loginBtn(login){
        return withRouter(({history}) => (
            <button onClick={() => {login(() => {history.push('/movie_home')})}}>login</button>
        ))
    }

    render(){
        const {login} = this.store;
        const LoginBtn = this.loginBtn(login);
        return (
            <div className="login">
                this is login
                <LoginBtn />
            </div>
        )
    }
}