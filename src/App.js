import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import { GlobalProvider } from './GlobalContext';

function App() {
  return (
      <Router>
        <GlobalProvider>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/products"><Products /></Route>
            <Route path="/cart"><Cart /></Route>
          </Switch>
        </div>
        </GlobalProvider>
      </Router>
    
  );
}

export default App;
