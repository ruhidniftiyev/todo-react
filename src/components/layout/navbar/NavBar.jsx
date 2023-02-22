import './Navbar.scss';
import NavbarLogo from './logo/NavbarLogo';
import NavbarProfile from './profile/NavbarProfile';
import NavbarSearch from './search/NavbarSearch';
import NavbarProjects from './projects/NavbarFavorites';
import { useState } from 'react';

const Navbar = () => {
  const [favorites] = useState([
    { id: 0, title: 'Marketing' },
    { id: 1, title: 'Mobile App' },
  ]);

  const [myProjects] = useState([
    { id: 0, title: 'Marketing' },
    { id: 1, title: 'Landing Page' },
    { id: 2, title: 'Wedding' },
    { id: 3, title: 'Mobile App' },
    { id: 4, title: 'House Constuction' },
  ]);

  return (
    <div className="navbar">
      <NavbarLogo />
      <NavbarSearch />
      <NavbarProfile />
      <div className="navbar__content">
        <NavbarProjects title="Favorites" projects={favorites} />
        <NavbarProjects title="My Projects" projects={myProjects} />
      </div>
    </div>
  );
};

export default Navbar;
