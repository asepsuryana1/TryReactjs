const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: String, complete: {type: Boolean, default: true} 
  });


  module.exports = mongoose.model('Todo', todoSchema);