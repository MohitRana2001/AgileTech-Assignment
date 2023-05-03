const mongoose = require('mongoose');

const attendeesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

const eventSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true
  },
  event_id: {
    type: Number,
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
    }
  },
  moderator: {
    type: String,
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
    type: [attendeesSchema],
    required: true
  }]
});

module.exports = mongoose.model('Event', eventSchema);
