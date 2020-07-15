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
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
        </GlobalProvider>
      </Router>
    
  );
}

export default App;
