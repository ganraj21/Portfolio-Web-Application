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
    max: 50,
    unique: true,
  },
  message: {
    type: String,
    required: true,
    max: 250,
    unique: true,
  },
});

module.exports = mongoose.model("Users", userSchema);
