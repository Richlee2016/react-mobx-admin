import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import LazyRoute from "lazy-route";

// export default function() {
//   const routerArr = [{ name: "/movie_home", component: import('@/views/Movie/home') }];

//   const Routers = routerArr.map(o => {
//     return (
//       <Route
//         key={o.name}
//         path={o.name}
//         render={props => (
//           <LazyRoute {...props} component={o.component} />
//         )}
//       />
//     );
//   });

//   return <div className="router-box">{Routers}</div>;
// }

export default class Routers extends React.Component {
  render() {
    return (
      <div className="router-box">
        <Route
          path="/movie_home"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Movie/home")} />
          )}
        />
        <Route
          path="/movie_log"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Movie/log")} />
          )}
        />
        <Route
          path="/movie_crawler"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Movie/crawler")} />
          )}
        />
      </div>
    );
  }
}
