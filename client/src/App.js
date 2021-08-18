import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import LoginForm from "./Components/pages/LoginForm";


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', //nanti tukar
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <LoginForm/>
    </ApolloProvider>
  );
}

export default App;
