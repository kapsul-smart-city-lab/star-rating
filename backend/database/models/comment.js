// Import the required modules
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
  },
  mail: {
    type: String,
  },
  rate: {
    type: Number,
    required: true
  }
});

const Comment = mongoose.model('comments', commentSchema);

module.exports = Comment;