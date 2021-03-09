import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import history from "../../utils/browserHistory";

// Route
import Main from "../../pages/Main";
import Summary from "../../pages/Summary";

// default
import Empty from "../../pages/Enpty";

// style
import "./style.css";

const Routes = () => (
  <Router history={history}>
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={1000} classNames="chew">
            <Switch location={location}>
              <Route exact path="/" component={Main} />
              <Route exact path="/Main" component={Main} />
              <Route exact path="/Summary" component={Summary} />

              <Route component={Empty} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </Router>
);

export default Routes;
