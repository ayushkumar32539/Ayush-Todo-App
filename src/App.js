// App.js
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import TaskReducer from './Reducers/TaskReducers';
import TaskInput from './Component/TaskInput';
import TaskList from './Component/TaskList';

const rootReducer = combineReducers({
  tasks: TaskReducer
});

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <TaskInput />
      <TaskList />
    </div>
  </Provider>
);

export default App;
