import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = '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';
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
