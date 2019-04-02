import React from 'react';
import Navigation from '../../components/Navigation';
import ResourcePage from '../ResourcesPage';
import './style.css';

class Dashboard extends React.PureComponent {
  render () {
    const { location } = this.props
    return (
      <div className="Dashboard">
        <div className="Dashboard__sidebar">
          <Navigation {...this.props}/>
        </div>
        <div className="Dashboard__main">
          <ResourcePage location={location} />
        </div>
      </div>
    )
  }
}

export default Dashboard;
