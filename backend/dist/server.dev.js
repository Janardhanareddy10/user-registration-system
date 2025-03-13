"use strict";

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const userRoutes = require("./routes/userRoutes");
// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json()); // Middleware to parse JSON
// app.use("/api/users", userRoutes); // User routes
// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
var express = require("express");

var mongoose = require("mongoose");

var cors = require("cors");

var dotenv = require("dotenv");

var userRoutes = require("./routes/userRoutes");

dotenv.config();
var app = express(); // Middleware

app.use(cors({
  origin: "*"
})); // Allow all origins

app.use(express.json()); // Routes

app.use("/api/users", userRoutes); // Connect to MongoDB

var connectDB = function connectDB() {
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(process.env.MONGO_URI));

        case 3:
          console.log("✅ MongoDB connected");
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error("❌ MongoDB connection error:", _context.t0.message);
          process.exit(1); // Stop server if DB fails

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}; // Start Server


var PORT = process.env.PORT || 5000;
app.listen(PORT, function _callee() {
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(connectDB());

        case 2:
          // Ensure DB connects before running server
          console.log("\uD83D\uDE80 Server running on port ".concat(PORT));

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
});
//# sourceMappingURL=server.dev.js.map
