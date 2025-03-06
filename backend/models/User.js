const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  dob: String,
  password: String,
  gender: String,
  about: String,
});

module.exports = mongoose.model("User", userSchema);
