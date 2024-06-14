const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  time: { type: String },
  location: {
    city: String,
    state: String,
    coordinates: {
      latitude: Number,
      longitude: Number,
    },
  },
  type: { type: String },  // Add more fields as needed
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
