import React from 'react';

import './todoItem.css';

export const TodoItem = (props) => {
  const { item, handleDeleteTask, handleEditTask, handleChangeStatus } = props;

  return (
    <div className='todoItem'>
      <span id={item.id} className={item.status ? 'completed' : 'uncompleted'}>
        {item.name}
      </span>
      <br />
      <button onClick={() => handleEditTask(item)} className='btn-edit'>
        Edit
      </button>
      <button
        className='btn-delete'
        onClick={() => {
          handleDeleteTask(item.id);
        }}
      >
        Delete
      </button>
      <button onClick={() => handleChangeStatus(item)} type='button'>
        ✔
      </button>
    </div>
  );
};
