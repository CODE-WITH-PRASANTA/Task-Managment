const express = require('express');
const VIP2Task = require('../Model/Vip2Task');
const router = express.Router();

// Create a new VIP-2 task
router.post('/add', async (req, res) => {
    const { fileUrl, title, description } = req.body;
  
    if (!fileUrl || !title || !description) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    try {
      const newVIP2Task = new VIP2Task({ fileUrl, title, description });
      await newVIP2Task.save();
      res.status(201).json(newVIP2Task);
    } catch (error) {
      res.status(500).json({ message: 'Error creating VIP-2 task.', error });
    }
  });
  
// Get all VIP-2 tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await VIP2Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching VIP-2 tasks.', error });
  }
});

// Delete a VIP-2 task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await VIP2Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'VIP-2 task deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting VIP-2 task.', error });
  }
});

module.exports = router;
