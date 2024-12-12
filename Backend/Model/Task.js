// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  url: { type: String, required: true },
  taskName: { type: String, required: true },
  taskDescription: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model('Task', taskSchema);
