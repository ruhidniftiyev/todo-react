import React from 'react';
import ToolsItems from './items/ToolsItems';
import ToolsTitle from './title/ToolsTitle';

import './Tools.scss';

const Tools = () => {
  return (
    <div className="tools">
      <ToolsTitle />
      <ToolsItems />
    </div>
  );
};

export default Tools;
