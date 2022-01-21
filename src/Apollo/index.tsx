import {ReactElement} from 'react';

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'

interface WrapperProps {
  children: ReactElement;
}

const ApolloProviderWrapper = ({ children }: WrapperProps) => {

  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GQL_URL || 'http://localhost:3005'
  });
  
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
};

export default ApolloProviderWrapper;
