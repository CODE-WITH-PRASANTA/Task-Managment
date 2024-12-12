const express = require('express');
const VIP5Task = require('../Model/Vip5Task');
const router = express.Router();

// Create a new VIP-5 task
router.post('/add', async (req, res) => {
    const { fileUrl, title, description } = req.body;
  
    if (!fileUrl || !title || !description) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    try {
      const newVIP5Task = new VIP5Task({ fileUrl, title, description });
      await newVIP5Task.save();
      res.status(201).json(newVIP5Task);
    } catch (error) {
      res.status(500).json({ message: 'Error creating VIP-5 task.', error });
    }
  });
  
// Get all VIP-5 tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await VIP5Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching VIP-5 tasks.', error });
  }
});

// Delete a VIP-5 task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await VIP5Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'VIP-5 task deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting VIP-5 task.', error });
  }
});

module.exports = router;
