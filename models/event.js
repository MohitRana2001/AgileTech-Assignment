const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    required: true
  },
  schedule: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  files: {
    image: {
      type: String,
      required: true
    }
  },
  moderator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    required: true
  },
  sub_category: {
    type: String,
    required: true
  },
  rigor_rank: {
    type: Number,
    required: true
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  nudges: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Nudge'
  }]
});

module.exports = mongoose.model('Event', eventSchema);
