import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// import "./App.css"

// components
import Routes from "./Routes/PublicRoutes";

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/app" />}
        />
        <PublicRoute path="/app" component={Routes} />
      </Switch>
    </HashRouter>
  );

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        exact
        render={props => React.createElement(component, props)}
      />
    );
  }
}
