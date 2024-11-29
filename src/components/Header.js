import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
      <Link to="/" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>About</Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
};

export default Header;
