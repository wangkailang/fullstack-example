import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import navItemArray from '../../constants/routes';
import { AUTH_TOKEN } from '../../constants';
import './style.css';

function NavItem(props) {
  const { title, path } = props;
  return (
    <div className="Navigation__item">
      <NavLink to={path}>
        {title}
      </NavLink>
    </div>
  )
}

class Navigation extends React.PureComponent {
  handleLogout = () => {
    this.props.refreshToken({
      [AUTH_TOKEN]: null,
    });
    window.location.href = '/';
  }
  render() {
    return (
      <Nav className="flex-column">
        {navItemArray.map((item, key) => <NavItem key={key} {...item} />)}
        {!this.props.token && <NavItem path="/login" title="login" />}
        {this.props.token && (
          <div className="Navigation__item">
            <span onClick={this.handleLogout}>loginout</span>
          </div>
        )}
      </Nav>
    )
  }
}

export default Navigation;