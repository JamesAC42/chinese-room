import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';

import Play from './Play/Play';
import Home from './Home';

import "./css/index.scss";

class App extends Component {

  render() {
    return(
      <div>
        <Switch>
          <Route 
            path="/"
            exact
            component={Home}>
          </Route>
          <Route 
            path="/play"
            exact
            component={Play}>
          </Route>
        </Switch>
      </div>
    )
  }

}

export default App;
