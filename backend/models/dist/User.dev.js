"use strict";

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  dob: String,
  password: String,
  gender: String,
  about: String
});
module.exports = mongoose.model("User", userSchema);
//# sourceMappingURL=User.dev.js.map
