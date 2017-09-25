import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter,Route,Switch} from "react-router-dom";
import App from "@/views/App";
import * as stores from '@/stores';
// css
import "@/assets/css/reset.css"
import "@/assets/css/iconfont.css"
const go = () => (<div>321</div>)
ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <Switch>
        <App/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
