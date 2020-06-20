import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-main">
      <h2>WELCOME</h2>
      <h5>SHOPPING CART REACT APP</h5>
      <Link to="/products">
        <h6 style={{ margin: 'auto', paddingTop: '20px', paddingBottom: '20px', marginBottom: '200px', width: '350px', borderRadius: '5pt', backgroundColor: '#DBD7D7' }}>LET'S START SHOPPING</h6>
      </Link>
      <div>
        <h4>Disclaimer</h4>
        <p className="disclaimer">This is a sample website made for learning purpose. All the images used in this website are attributed to the Servis FootWear Company's Official Website. All prices quoted in the website are unreal.</p>
      </div>
    </div>
  );
}

export default Home;
