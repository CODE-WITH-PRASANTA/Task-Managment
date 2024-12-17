import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../../config'; // Import the config file

const Dashboardvip6 = () => {
  const [formData, setFormData] = useState({
    url: '',
    taskName: '',
    taskDescription: '',
  });

  const [taskList, setTaskList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${config.baseUrl}api/vip6`);
        setTaskList(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/adminlogin'); // Redirect if not authenticated
    } else {
      fetchTasks();
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.baseUrl}api/vip6/add`, {
        fileUrl: formData.url,
        title: formData.taskName,
        description: formData.taskDescription,
      });
      setTaskList([...taskList, response.data]);
      setFormData({ url: '', taskName: '', taskDescription: '' });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${config.baseUrl}api/vip6/${id}`);
      setTaskList(taskList.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear authentication flag
    navigate('/adminlogin');
  };

  return (
    <>
      <div className="dashboard-container">
        {/* Form Section */}
        <div className="form-container">
          <h2>VIP-6</h2>
          <form onSubmit={handleSubmit}>
            <table className="form-table">
              <thead>
                <tr>
                  <th colSpan="2">Upload Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Upload URL:</td>
                  <td>
                    <input
                      type="text"
                      name="url"
                      value={formData.url}
                      onChange={handleChange}
                      placeholder="Enter URL"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>Task Name:</td>
                  <td>
                    <input
                      type="text"
                      name="taskName"
                      value={formData.taskName}
                      onChange={handleChange}
                      placeholder="Enter Task Name"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>Task Description:</td>
                  <td>
                    <textarea
                      name="taskDescription"
                      value={formData.taskDescription}
                      onChange={handleChange}
                      placeholder="Write about the task"
                      required
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        {/* Task List Section */}
        <div className="task-list-container">
          <h2>Task List</h2>
          <table className="task-table">
            <thead>
              <tr>
                <th>Uploaded URL</th>
                <th>Task Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {taskList.map((task) => (
                <tr key={task._id}>
                  <td>{task.fileUrl}</td>
                  <td>{task.title}</td>
                  <td>
                    <button onClick={() => handleDelete(task._id)} className="delete-btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboardvip6;
