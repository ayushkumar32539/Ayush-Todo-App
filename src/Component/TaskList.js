// TaskList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, TextField, Box } from '@mui/material';
import { Delete, Edit as EditIcon } from '@mui/icons-material'; // Renamed Edit icon to avoid conflict

import { deleteTask, editTask, toggleTaskCompletion } from '../Actions/TaskActions'; // Adjust the path as per your file structure

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();
  const [editTaskId, setEditTaskId] = useState(null); // State to track the task being edited

  const handleToggleEdit = (taskId) => {
    setEditTaskId(taskId === editTaskId ? null : taskId); // Toggle edit mode
  };

  const handleEditChange = (taskId, newText) => {
    dispatch(editTask(taskId, newText));
    setEditTaskId(null); // Exit edit mode after editing
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <List style={{ width: '100%', maxWidth: 400 }}>
        {tasks.map((task) => (
          <ListItem key={task.id} dense button style={{ marginBottom: 10, borderRadius: 8, backgroundColor: '#f5f5f5', padding: '10px 15px', width: '100%' }}>
            <Checkbox
              checked={task.completed}
              onChange={() => dispatch(toggleTaskCompletion(task.id))}
            />
            {editTaskId === task.id ? (
              <TextField
                value={task.text}
                onChange={(e) => handleEditChange(task.id, e.target.value)}
                fullWidth
                variant="standard"
                style={{ marginLeft: 10 }}
              />
            ) : (
              <ListItemText
                primary={task.text}
                style={{ textDecoration: task.completed ? 'line-through' : 'none', flex: 1 }}
              />
            )}
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleToggleEdit(task.id)}
              >
                <EditIcon style={{ color: '#4caf50' }} /> {/* Green color for Edit icon */}
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => dispatch(deleteTask(task.id))}
              >
                <Delete style={{ color: '#f44336' }} /> {/* Red color for Delete icon */}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskList;
