import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import './LoginScreen.css';

import { auth, firebase, firestore } from '../../Components/Firebase';

import * as routes from '../../Routes/routes';

const RegisterScreen = ({ history }) =>
  <div className="content content-with-padding register-form-content">
    {/* <h1>SignUp</h1> */}
    <SignUpForm history={history} />
  </div>

const INITIAL_STATE = {
  name: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  accepted: false,
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    event.preventDefault();

    const {
      name,
      email,
      passwordOne,
      accepted
    } = this.state;

    const {
      history,
    } = this.props;

    let user = new Object();
    user["name"] = name;
    user["email"] = email;
    user["favorites"] = [];

    console.log(user);

    var self = this;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log(auth.getUserId());
        self.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        self.setState(byPropKey('error', error));
      });
    
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
          ? firestore.createNewParticipant(authUser.uid, user)
          .then(res => {
            history.push(routes.Login);
          })
          .catch(error => {
            console.log('Error: Could not create participant: ', error);
          })
          : console.log("authUser is null");
    });

  }

  render() {
    const {
      name,
      email,
      passwordOne,
      passwordTwo,
      accepted,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo
      || passwordOne === ''
      || email === ''
      || name === ''
      || accepted == false
      ;

    return (
      <div className="register-form">
        <span>
          <Link to={routes.Login}>{"<"} Go back to login</Link>
        </span>
        {/* <div class="cl-wh" id="f-mlb">Make new account</div> */}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label class="cl-wh f-lb">Email:</label>
            <div class="f-i-bx b3 mrg3b">
              <div class="tb">
                  <div class="td icon"><i class="fas fa-envelope"></i></div>
                  <div class="td prt">
                    <input
                      value={email}
                      onChange={event => this.setState(byPropKey('email', event.target.value))}
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
            </div>
          <div className="form-group">
            <label class="cl-wh f-lb">Name:</label>
            <div class="f-i-bx b3 mrg3b">
              <div class="tb">
                  <div class="td icon"><i class="fas fa-user"></i></div>
                  <div class="td prt">
                  <input
                    value={name}
                    onChange={event => this.setState(byPropKey('name', event.target.value))}
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
          <label class="cl-wh f-lb">Password:</label>
            <div class="f-i-bx b3 mrg3b">
              <div class="tb">
                <div class="td icon"><i class="fas fa-lock"></i></div>
                <div class="td prt">
                  <input
                    value={passwordOne}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            <div class="f-i-bx b3 mrg3b">
              <div class="tb">
                <div class="td icon"><i class="fas fa-lock"></i></div>
                <div class="td prt">
                  <input
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Repeat password"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="form-group">
            Ik ga akkoord met het <a target="_blank" rel="noopener noreferrer" href="/privacy">privacybeleid</a>:
            <input
              value={accepted}
              onChange={event => this.setState(byPropKey('accepted', event.target.value))}
              type="checkbox"
              placeholder="Instituut"
            />
          </div> */}
          {/* <div id="tc-bx">Je gaat akkoord met onze <a href={routes.Voorwaarden}>voorwaarden</a> &amp; <a href={routes.Privacy}>privacy beleid</a>.</div> */}
          <div id="s-btn" class="mrg25t"><input type="submit" value="Sign up" class="b3"/></div>
          { error && <p>{error.message}</p> }
        </form>
      </div>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.Register}>Sign Up</Link>
  </p>

export default withRouter(RegisterScreen);

export {
  SignUpForm,
  SignUpLink,
};