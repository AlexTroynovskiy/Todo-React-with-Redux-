import React, { useState } from 'react';

import './modal.css';

export const Modal = (props) => {
  const { showModal, todo, handleChangeTodo, openCloseModal } = props;
  const [name, setName] = useState(todo.name);

  const handleValueModal = (e) => {
    let value = e.target.value;
    setName(value);
  };
  const handleCloseModal = () => {
    openCloseModal(false);
  };
  const sendDataItem = () => {
    handleChangeTodo({ name });
    setName('');
    openCloseModal(false);
  };
  return (
    <>
      {showModal ? (
        <div className='modal'>
          <input
            value={name}
            onChange={handleValueModal}
            placeholder='edit your task'
            type='text'
          />
          <button onClick={sendDataItem}>Save</button>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      ) : null}
    </>
  );
};
