import { Header } from './header';
import { connect } from 'react-redux';

import { getDoneTask } from '../../redux/action';

const mapStateToProps = (state) => ({
  listTodo: state.listTodo,
  doneTask: state.doneTask,
});

const mapDispatchToProps = {
  getDoneTask,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
