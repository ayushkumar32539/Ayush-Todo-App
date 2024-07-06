// TaskInput.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTask } from '../Actions/TaskActions'; // Adjust the path as per your file structure

const TaskInput = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task)); // Dispatch addTask action here
      setTask('');
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" marginTop="3rem">
      <h1 style={{ fontWeight: '700', marginBottom: '1rem' }}>TO-DO Application</h1>
      <Box width="50%" display="flex" alignItems="center" marginBottom="2rem">
        <TextField
          label="New Task"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          fullWidth
          style={{ marginRight: '1rem' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          style={{ backgroundColor: '#4caf50', color: '#ffffff', borderRadius: 0 }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default TaskInput;
