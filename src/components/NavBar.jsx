import logo from '../assets/images/logo.svg';
import '../assets/scss/Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} className="navbar__logo-img" alt="" />
      </div>
      <div className="navbar__search">
        <input className="navbar__search-input" placeholder="Search..." />
      </div>
      <div className="navbar__user">
        <div className="navbar__user-logo">
          <img src="" alt="" className="navbar__user-logo-img" />
        </div>
        <div className="navbar__user-workspace">
          <p>My workspace</p>
        </div>
      </div>
      <div className="navbar__content">
        <div className="navbar__content-favorites">
          <ul>
            <li>Marketing</li>
            <li>Mobile App</li>
          </ul>
        </div>
        <div className="navbar__content-projects">
          <ul>
            <li>Marketing</li>
            <li>Landing Pages</li>
            <li>Wedding</li>
            <li>Mobile</li>
            <li>House Constucting</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
