const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    max: 20,
  },
  message: {
    type: String,
    required: true,
    max: 250,
  },
});

module.exports = mongoose.model("Users", userSchema);
