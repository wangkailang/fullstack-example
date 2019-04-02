import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import SignupPage from '../containers/SignupPage';
import LoginPage from '../containers/SignupPage/Login';
import NotFoundPage from '../containers/NotFound';
import { AUTH_TOKEN } from '../constants';

const ProtectedRoute = ({ component: Component, token, refreshToken, ...rest }) => {
  return token ? (
    <Route {...rest} render={matchProps => <Component {...matchProps} refreshToken={refreshToken}/>} />
  ) : (
    <Redirect to="/login" />
  )
}

class Routes extends React.PureComponent {
  state = {
    token: '',
  }
  componentWillMount() {
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
        <ProtectedRoute
          path="/dashboard"
          token={this.state.token}
          component={Dashboard}
          refreshToken={this.refreshToken}
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
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}

export default Routes;