import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

import TitleScreen from './Components/Title/TitleScreen';
import LoginScreen from './Components/Login/LoginScreen';
import RegisterScreen from './Components/Login/RegisterScreen';
import Dashboard from './Components/Dashboard/Dashboard'

import withAuthentication from './Components/withAuthentication';

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
                <Route path={routes.Register} render={() => <RegisterScreen/>}/>
                <Route path={routes.Dashboard} render={() => <Dashboard/>}/>
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
