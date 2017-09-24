import React from "react";
import { inject, observer } from "mobx-react";
import './movie.less'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
          <div className="movieBox">
           movie
          </div>
        );
  }
}

