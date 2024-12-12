const express = require('express');
const VIP4Task = require('../Model/Vip4Task');
const router = express.Router();

// Create a new VIP-4 task
router.post('/add', async (req, res) => {
    const { fileUrl, title, description } = req.body;
  
    if (!fileUrl || !title || !description) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    try {
      const newVIP4Task = new VIP4Task({ fileUrl, title, description });
      await newVIP4Task.save();
      res.status(201).json(newVIP4Task);
    } catch (error) {
      res.status(500).json({ message: 'Error creating VIP-4 task.', error });
    }
  });
  
// Get all VIP-4 tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await VIP4Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching VIP-4 tasks.', error });
  }
});

// Delete a VIP-4 task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await VIP4Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'VIP-4 task deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting VIP-4 task.', error });
  }
});

module.exports = router;
