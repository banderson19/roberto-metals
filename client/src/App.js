import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SingleTicket from './pages/SingleTicket';
import NoMatch from './pages/NoMatch';


import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// establish connect to back-end servers /graphql endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex-column justify-flex-start min-100-vh'>
          <Header/>
          <div className='container'>
            <Switch> 
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/profile/:clientName?" component={Profile} />
              <Route exact path="/ticket/:id" component={SingleTicket} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
