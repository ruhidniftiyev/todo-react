import React, { useState } from 'react';
import roadmap from '../images/roadmap.svg';
import schedule from '../images/schedule.svg';
import tasks from '../images/tasks.svg';
import notes from '../images/notes.svg';
import files from '../images/files.svg';

const ToolsItems = () => {
  const [isSelected, setIsSelected] = useState(1);

  const [tools] = useState([
    { id: 0, title: 'Roadmap', icon: roadmap },
    { id: 1, title: 'Schedule', icon: schedule },
    { id: 2, title: 'Tasks', icon: tasks },
    { id: 3, title: 'Notes', icon: notes },
    { id: 4, title: 'Files', icon: files },
  ]);

  const selectTool = (id) => {
    setIsSelected(id);
  };

  return (
    <div className="tools__items">
      {tools.map((tool, index) => (
        <div
          onClick={() => selectTool(index)}
          className={isSelected === index ? 'tools__item selected' : 'tools__item'}>
          {isSelected === index ? <div className="tools__selectBlock"></div> : null}
          <img src={tool.icon} alt="" />
          <span>{tool.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ToolsItems;
