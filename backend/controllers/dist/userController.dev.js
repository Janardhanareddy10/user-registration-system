"use strict";

var User = require("../models/User");

var createUser = function createUser(req, res) {
  var _req$body, name, age, dob, gender, about, user;

  return regeneratorRuntime.async(function createUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, age = _req$body.age, dob = _req$body.dob, gender = _req$body.gender, about = _req$body.about;

          if (!(!name || !age || !dob || !gender)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: "All fields except 'about' are required"
          }));

        case 4:
          user = new User({
            name: name,
            age: age,
            dob: dob,
            gender: gender,
            about: about
          });
          _context.next = 7;
          return regeneratorRuntime.awrap(user.save());

        case 7:
          res.status(201).json({
            message: "User registered successfully",
            user: user
          });
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: "Server error",
            error: _context.t0.message
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

var getUsers = function getUsers(req, res) {
  var users;
  return regeneratorRuntime.async(function getUsers$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.find());

        case 3:
          users = _context2.sent;
          res.json(users);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: "Server error",
            error: _context2.t0.message
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var getUserById = function getUserById(req, res) {
  var user;
  return regeneratorRuntime.async(function getUserById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(User.findById(req.params.id));

        case 3:
          user = _context3.sent;

          if (user) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: "User not found"
          }));

        case 6:
          res.json(user);
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: "Server error",
            error: _context3.t0.message
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

var updateUser = function updateUser(req, res) {
  var updatedUser;
  return regeneratorRuntime.async(function updateUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(User.findByIdAndUpdate(req.params.id, req.body, {
            "new": true
          }));

        case 3:
          updatedUser = _context4.sent;

          if (updatedUser) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: "User not found"
          }));

        case 6:
          res.json(updatedUser);
          _context4.next = 12;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            message: "Server error",
            error: _context4.t0.message
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

var deleteUser = function deleteUser(req, res) {
  var deletedUser;
  return regeneratorRuntime.async(function deleteUser$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(User.findByIdAndDelete(req.params.id));

        case 3:
          deletedUser = _context5.sent;

          if (deletedUser) {
            _context5.next = 6;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            message: "User not found"
          }));

        case 6:
          res.json({
            message: "User deleted successfully"
          });
          _context5.next = 12;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            message: "Server error",
            error: _context5.t0.message
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

module.exports = {
  createUser: createUser,
  getUsers: getUsers,
  getUserById: getUserById,
  updateUser: updateUser,
  deleteUser: deleteUser
};
//# sourceMappingURL=userController.dev.js.map
