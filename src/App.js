import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
      <Router>
        <GlobalProvider>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" exact><Home /></Route>
            <Route path="/products"><Products /></Route>
            <Route path="/cart"><Cart /></Route>
          </Routes>
        </div>
        </GlobalProvider>
      </Router>
    
  );
}

export default App;
