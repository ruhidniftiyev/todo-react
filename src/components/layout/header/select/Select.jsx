import React, { useEffect, useState } from 'react';
import downArrow from '../downArrow.svg';
import upArrow from '../upArrow.svg';

const Select = ({ list, title }) => {
  const [selectStatus, setSelectStatus] = useState(false);

  const openList = () => {
    setSelectStatus(!selectStatus);
  };

  useEffect(() => {
    document.body.addEventListener('click', () => {
      setSelectStatus(false);
    });
  }, [selectStatus]);

  return (
    <div className="header__select">
      <div
        onClick={openList}
        className={selectStatus ? 'header__select-btn open' : 'header__select-btn'}>
        <p className="header__select-btn-text">{title}</p>
        <img className="header__select-btn-arrow" src={selectStatus ? upArrow : downArrow} alt="" />
      </div>
      {selectStatus && (
        <div className="header__select-openList">
          <ul className="header__select-list">
            {list?.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
