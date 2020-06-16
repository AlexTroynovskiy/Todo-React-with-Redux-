import { Search } from './Search';
import { connect } from 'react-redux';
import { getSearchTask, getSearchList } from '../../redux/action';

const mapStateToProps = (state) => ({
  todoList: state.listTodo,
  term: state.term,
});

const mapDispatchToProps = {
  getSearchTask,
  getSearchList,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
