import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK_COMPLETION } from '../Actions/TaskActions';

const initialState = {
  tasks: []
};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload.text, completed: false }
        ]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id)
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, text: action.payload.newText } : task
        )
      };
    case TOGGLE_TASK_COMPLETION:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, completed: !task.completed } : task
        )
      };
    default:
      return state;
  }
};

export default TaskReducer;
