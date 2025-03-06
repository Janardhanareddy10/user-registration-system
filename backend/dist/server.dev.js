"use strict";

var express = require("express");

var mongoose = require("mongoose");

var cors = require("cors");

var dotenv = require("dotenv");

var userRoutes = require("./routes/userRoutes");

dotenv.config();
var app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON

app.use("/api/users", userRoutes); // User routes
// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("MongoDB connected");
})["catch"](function (err) {
  return console.log(err);
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("Server running on port ".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
