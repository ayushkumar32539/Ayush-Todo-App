import { connect } from 'react-redux';
import TaskList from './TaskList';
import { deleteTask, editTask, toggleTaskCompletion } from '../Actions/TaskActions';

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks
});

const mapDispatchToProps = {
  deleteTask,
  editTask,
  toggleTaskCompletion
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
