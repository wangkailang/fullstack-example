import React from 'react';
import { Link } from 'react-router-dom';

export default ({ location }) => (
  <div>
    <p>Sorry, no page found at {location.pathname}</p>
    <Link to="/">Go Back</Link>
  </div>
)