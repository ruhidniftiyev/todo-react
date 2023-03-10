import React, { useState } from 'react';
import downArrow from '../img/arrow.svg';

const NavbarProjects = ({ title, projects }) => {
  const [selectStatus, setSelectStatus] = useState(true);

  const openCloseSelect = () => {
    setSelectStatus(!selectStatus);
  };

  return (
    <div className="navbar__projects">
      <div onClick={openCloseSelect} className="navbar__projects-select">
        <img src={downArrow} alt="" />
        <p className="navbar__projects-title">{title}</p>
      </div>
      {selectStatus && (
        <ul>
          {projects?.map((obj) => (
            <li className="navbar__projects-item" key={obj.id}>
              {obj.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavbarProjects;
