import React from 'react';
import './App.css';
import Header from './components/header';
import TodoList from './components/todolist';
import Search from './components/search';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Search />
      <TodoList />
    </div>
  );
};

export default App;
