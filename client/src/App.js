import './App.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {useSelector} from 'react-redux';
import Home from './components/Home/Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

function App() {
  const state = useSelector(state => state.UserReducer);
  return (
 <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">

      <Router>
      
        <Switch>
            <Route path="/" exact>
            {state.user ? <Home/> : <Login/> }
            </Route>
            <Route path="/Register">
                <Register/>
               
            </Route>
        </Switch>
      </Router>

      </header>
    </div>
     </ApolloProvider>

  );
}

export default App;