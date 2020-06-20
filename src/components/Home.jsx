import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-main">
      <h2>WELCOME</h2>
      <h5>TO SHOPPING CART REACT APP</h5>
      
        <h6 style={{margin: 'auto', padding: '20px', marginBottom: '40px',width:'fit-content', borderRadius: '5pt', backgroundColor: '#DBD7D7' }}><Link to="/products">LET'S START SHOPPING</Link></h6>
      
      <div>
        <h4>Disclaimer</h4>
        <p className="disclaimer">This is a sample website made ONLY for learning purpose. All the product images used in this website are attributed to the NDURE FootWear Company's Official Website. All the product names and prices quoted in this website are unreal and random.</p>
      </div>
    </div>
  );
}

export default Home;
