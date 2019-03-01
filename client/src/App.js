import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import UsersTable from './containers/UsersTable';
import './App.css';

const client = new ApolloClient ({
  uri: 'http://localhost:4466',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h2>Appllo App</h2>
          <UsersTable />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
