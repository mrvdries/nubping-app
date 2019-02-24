import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

import TitleScreen from './Screens/Title/TitleScreen';
import LoginScreen from './Screens/Login/LoginScreen';

import  * as routes from './Routes/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              {/* <Navigation/> */}
              <div class="main-content">
              <Switch>
                <Route path={routes.Title} exact render={() => <TitleScreen/>}/>
                <Route path={routes.Login} render={() => <LoginScreen/>}/>
              </Switch>
              </div>
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
