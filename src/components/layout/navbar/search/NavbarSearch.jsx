import React from 'react';
import searchIcon from './searchIcon.svg';

const NavbarSearch = () => {
  return (
    <div className="navbar__search">
      <input className="navbar__search-input" placeholder="Search..." />
      <img className='navbar__search-icon' src={searchIcon} alt="" />
    </div>
  );
};

export default NavbarSearch;
