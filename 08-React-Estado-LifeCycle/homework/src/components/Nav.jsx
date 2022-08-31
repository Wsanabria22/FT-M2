import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-light bg-light">  
      <span className='navbar-brand mb-0 h1' href="">
        <img src={Logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
        Henry - Weather App
      </span>
      <SearchBar onSearch={onSearch}/> 
    </nav>
  );
};

export default Nav;
