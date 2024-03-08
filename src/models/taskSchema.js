const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: true,
  },
});

module.exports = mongoose.model('task', taskSchema);
