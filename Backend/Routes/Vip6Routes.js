const express = require('express');
const VIP6Task = require('../Model/Vip6Task');
const router = express.Router();

// Create a new VIP-6 task
router.post('/add', async (req, res) => {
    const { fileUrl, title, description } = req.body;
  
    if (!fileUrl || !title || !description) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    try {
      const newVIP6Task = new VIP6Task({ fileUrl, title, description });
      await newVIP6Task.save();
      res.status(201).json(newVIP6Task);
    } catch (error) {
      res.status(500).json({ message: 'Error creating VIP-6 task.', error });
    }
  });
  
// Get all VIP-6 tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await VIP6Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching VIP-6 tasks.', error });
  }
});

// Delete a VIP-6 task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await VIP6Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'VIP-6 task deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting VIP-6 task.', error });
  }
});

module.exports = router;
