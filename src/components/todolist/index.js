import { TodoList } from './TodoList';
import { connect } from 'react-redux';
import {
  addTodoItem,
  deleteTask,
  openCloseModal,
  updateItem,
} from '../../redux/action';

const mapStateToProps = (state) => ({
  todoList: state.listTodo,
  open: state.showModal,
  searchList: state.searchList,
  term: state.term,
});

const mapDispatchToProps = {
  addTodoItem,
  deleteTask,
  openCloseModal,
  updateItem,
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
