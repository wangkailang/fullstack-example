import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { setContext } from 'apollo-link-context'
import { ApolloProvider } from "react-apollo";
import { getMainDefinition } from 'apollo-utilities'
import { BrowserRouter } from 'react-router-dom';
import { AUTH_TOKEN } from './constants';
import Routes from './routes';
import './App.css';

const httpLink = createHttpLink({ uri: 'http://localhost:4000' });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})
// authenticated httplink
const httpLinkAuth = authLink.concat(httpLink);

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000`,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`,
    },
  },
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLinkAuth,
);

// apollo client setup
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
