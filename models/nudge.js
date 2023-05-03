const mongoose = require('mongoose');

const nudgeSchema = new mongoose.Schema({
  event_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  timeToSend: {
    type: String,
    required: true
  },
  invitation: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Nudge', nudgeSchema);
