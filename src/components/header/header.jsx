import React, { useEffect } from 'react';
export const Header = (props) => {
  const { listTodo, getDoneTask, doneTask } = props;
  let totalTask = listTodo.length;
  let completedTask = listTodo.filter((el) => el.status === true).length;
  useEffect(() => {
    getDoneTask(completedTask);
  }, [completedTask, getDoneTask]);
  return (
    <div>
      <span>Total tasks: {`${totalTask}`}</span>
      <br />
      <span>Done tasks: {`${doneTask}`}</span>
    </div>
  );
};
