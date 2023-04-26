const mongoose = require('mongoose');

const nudgeSchema = new mongoose.Schema({
  eventId: {
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
  image: {
    type: String,
    required: true
  },
  timeToSend: {
    type: Date,
    required: true
  },
  files: {
    image: {
      type: String,
      required: true
    }
  },
  invitation: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Nudge', nudgeSchema);
