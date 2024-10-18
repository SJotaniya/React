import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../features/Slice';
import './Redux.css';

export default function Redux() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const [taskName, setTaskName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('incomplete');
  const [tags, setTags] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleTagChange = (tag) => {
    setTags(prevTags => 
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { taskName, deadline, priority, status, tags };

    if (editingIndex !== null) {
      dispatch(updateTask({ index: editingIndex, updatedTask: newTask }));
      setEditingIndex(null);
    } else {
      dispatch(addTask(newTask));
    }

    setTaskName('');
    setDeadline('');
    setPriority('');
    setStatus('incomplete');
    setTags([]);
  };

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEdit = (index) => {
    const taskToEdit = tasks[index];
    setTaskName(taskToEdit.taskName);
    setDeadline(taskToEdit.deadline);
    setPriority(taskToEdit.priority);
    setStatus(taskToEdit.status);
    setTags(taskToEdit.tags);
    setEditingIndex(index); // Set the index to indicate editing mode
  };

  return (
    <>
      <div className="task-manager">
        <h2>{editingIndex !== null ? 'Edit Task' : 'Task Manager'}</h2>
        <form className="task-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="taskName">Task Name:</label>
            <input type="text" id="taskName" name="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="deadline">Deadline:</label>
            <input type="date" id="deadline" name="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority:</label>
            <select id="priority" name="priority" value={priority} onChange={(e) => setPriority(e.target.value)} required >
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="form-group">
            <label>Status:</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="status" value="complete" onChange={() => setStatus('complete')} checked={status === 'complete'} /> Complete </label>
              <label>
                <input type="radio" name="status" value="incomplete" onChange={() => setStatus('incomplete')} checked={status === 'incomplete'} /> Incomplete </label>
            </div>
          </div>
          <div className="form-group">
            <label>Tags:</label>
            <div className="checkbox-group">
              {['work', 'personal', 'urgent', 'shopping'].map(tag => (
                <label key={tag}>
                  <input type="checkbox" checked={tags.includes(tag)} onChange={() => handleTagChange(tag)} />
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className="submit-btn">
            {editingIndex !== null ? 'Update Task' : 'Submit Task'}
          </button>
        </form>
      </div>
      <div className="task-list">
        <table className="task-table">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Deadline</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Tags</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.taskName}</td>
                <td>{task.deadline}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
                <td>{task.tags.join(', ')}</td>
                <td> <button className="update-btn" onClick={() => handleEdit(index)}>Update</button> </td>
                <td> <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}