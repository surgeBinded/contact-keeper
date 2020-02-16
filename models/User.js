const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    requiered: true
  },
  email: {
    type: String,
    requiered: true,
    unique: true
  },
  password: {
    type: String,
    requiered: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema);
