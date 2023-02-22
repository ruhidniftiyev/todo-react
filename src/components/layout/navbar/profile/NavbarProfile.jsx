import React from 'react';
import avatar from './avatar.svg';

const NavbarProfile = () => {
  return (
    <div className="navbar__profile">
      <div className="navbar__profile-avatar">
        <img src={avatar} alt="" className="navbar__profile-avatar-img" />
      </div>
      <div className="navbar__profile-workspace">
        <p>My workspace</p>
      </div>
    </div>
  );
};

export default NavbarProfile;
