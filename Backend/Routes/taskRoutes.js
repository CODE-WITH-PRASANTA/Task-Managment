// routes/taskRoutes.js
const express = require('express');
const Task = require('../Model/Task');
const router = express.Router();

// Create a new task
router.post('/add', async (req, res) => {
  const { url, taskName, taskDescription } = req.body;

  if (!url || !taskName || !taskDescription) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newTask = new Task({ url, taskName, taskDescription });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task.', error });
  }
});

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks.', error });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'Task deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task.', error });
  }
});

module.exports = router;
