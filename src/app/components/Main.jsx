import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route} from "react-router-dom";
import { Redirect } from "react-router";
import { store } from '../store';
import { ConnectedDashBoard } from "./Dashboard";
import { ConnectedNavigation } from "./Navigation";
import { ConnectedTaskDetail } from "./TaskDetail";
import { ConnectedLogin} from "./Login";
import { history } from "../store/history";


const RouteGuard = Component => ({match}) => {
  console.info("Route Guard: ", match);
  if (!store.getState().session.authenticated) {
    return <Redirect to="/" />
  } else {
    return <Component match={match} />
  }
};

export const Main = () => (
  <Router history={history}>
    <Provider store={ store } >
      <div>
        <ConnectedNavigation />
        <Route
          exact
          path="/dashboard"
          render={RouteGuard(ConnectedDashBoard)}
        />
        <Route
          exact
          path="/task/:id"
          render={RouteGuard(ConnectedTaskDetail)}
        />
        <Route
          exact
          path="/"
          render={() => <ConnectedLogin/>}
        />
      </div>
    </Provider>
  </Router>

);