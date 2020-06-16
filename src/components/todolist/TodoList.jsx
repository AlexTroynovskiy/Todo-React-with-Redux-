import React, { useState } from 'react';
import { TodoItem } from '../todoItem';
import './todoList.css';
import Modal from '../modal';

export const TodoList = (props) => {
  const {
    addTodoItem,
    deleteTask,
    openCloseModal,
    updateItem,
    searchList,
  } = props;
  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState({});

  const handleValueTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  };
  const handleAddTodoItem = () => {
    addTodoItem(title);
    setTitle('');
  };
  const handleDeleteTask = (id) => {
    deleteTask(id);
  };
  const handleEditTask = (todo) => {
    setTodo(todo);
    openCloseModal(true);
  };
  const handleChangeTodo = (_todo) => {
    const obj = { ...todo, ..._todo };
    setTodo(obj);
    updateItem(obj);
  };
  const handleChangeStatus = (item) => {
    item.status = !item.status;
    updateItem(item);
  };
  return (
    <div>
      <ul className='todoList'>
        {searchList.map((item, i) => {
          return (
            <li key={i}>
              <TodoItem
                handleChangeStatus={handleChangeStatus}
                handleEditTask={handleEditTask}
                handleDeleteTask={handleDeleteTask}
                item={item}
              />
            </li>
          );
        })}
      </ul>
      <input
        name='title'
        value={title}
        onChange={handleValueTitle}
        type='text'
      />
      <button className='btn-add' onClick={handleAddTodoItem}>
        {' '}
        Add new task
      </button>
      <Modal handleChangeTodo={handleChangeTodo} todo={todo} />
    </div>
  );
};
