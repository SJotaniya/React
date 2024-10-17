import React from 'react'
import './Redux.css'

export default function Redux() {
  return (
    <>
      <div className="task-manager">
        <h2>Task Manager</h2>
        <form className="task-form">
          <div className="form-group">
            <label htmlFor="taskName">Task Name:</label>
            <input type="text" id="taskName" name="taskName" required />
          </div>
          <div className="form-group">
            <label htmlFor="deadline">Deadline:</label>
            <input type="date" id="deadline" name="deadline" required />
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority:</label>
            <select id="priority" name="priority" required>
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="form-group">
            <label>Status:</label>
            <div className="radio-group">
              <label><input type="radio" name="status" value="complete" />Complete</label>
              <label><input type="radio" name="status" value="incomplete" defaultChecked />Incomplete</label>
            </div>
          </div>
          <div className="form-group">
            <label>Tags:</label>
            <div className="checkbox-group">
              <label><input type="checkbox" name="tags" value="work" />Work</label>
              <label><input type="checkbox" name="tags" value="personal" />Personal</label>
              <label><input type="checkbox" name="tags" value="urgent" />Urgent</label>
              <label><input type="checkbox" name="tags" value="shopping" />Shopping</label>
            </div>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><button className="update-btn">Update</button></td>
              <td><button className="delete-btn">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
