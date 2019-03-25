import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import SignupPage from '../containers/SignupPage';
import LoginPage from '../containers/SignupPage/Login';
import { AUTH_TOKEN } from '../constants';



class Routes extends React.PureComponent {
  state = {
    token: '',
  }
  componentDidMount() {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (token !== null && token !== undefined) {
      this.setState({ token });
    }
  }
  refreshToken = (data = {}) => {
    const token = data[AUTH_TOKEN];

    if (token) {
      localStorage.setItem(AUTH_TOKEN, token);
    } else {
      localStorage.removeItem(AUTH_TOKEN)
    }

    this.setState({
      token: data[AUTH_TOKEN],
    })
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          render={props => (
            <Dashboard {...props} token={this.state.token} refreshToken={this.refreshToken} />
          )}
        />
        <Route
          path="/signup"
          render={props => (
            <SignupPage {...props} refreshToken={this.refreshToken} />
          )}
        />
        <Route
          path="/login"
          render={props => (
            <LoginPage {...props} refreshToken={this.refreshToken} />
          )}
        />
      </Switch>
    )
  }
}

export default Routes;