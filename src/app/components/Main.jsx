import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route} from "react-router-dom";
import { store } from '../store'
import { ConnectedDashBoard } from "./Dashboard";
import { ConnectedNavigation } from "./Navigation";
import { ConnectedTaskDetail } from "./TaskDetail";
import { history } from "../store/history";


export const Main = () => (
  <Router history={history}>
    <Provider store={ store } >
      <div>
        <ConnectedNavigation />
        <Route
          exact
          path="/dashboard"
          render={() => (
            <ConnectedDashBoard />
          )}
        />
        <Route
          exact
          path="/task/:id"
          render={({match}) => (
              <ConnectedTaskDetail match={match} />
          )}
        />
      </div>
    </Provider>
  </Router>

);