import React, { useState } from 'react';
import AddButton from './addButton/AddButton';
import Select from './select/Select';

import './Header.scss';

const Header = () => {
  const [selectList] = useState([
    { id: 0, title: 'Board view' },
    { id: 1, title: 'Table view' },
    { id: 2, title: 'Kanban' },
  ]);

  return (
    <div className="header">
      <AddButton />
      <Select title="Kanban" list={selectList} />
      <Select title="Filter" list={selectList} />
    </div>
  );
};

export default Header;
