"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_URL = "http://localhost:8080/api"; // Change this if using a different server

var createUser = function createUser(userData) {
  return regeneratorRuntime.async(function createUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _axios["default"].post("".concat(API_URL, "/users"), userData));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.createUser = createUser;

var getUsers = function getUsers() {
  return regeneratorRuntime.async(function getUsers$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", _axios["default"].get("".concat(API_URL, "/users")));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getUsers = getUsers;

var getUserById = function getUserById(id) {
  return regeneratorRuntime.async(function getUserById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", _axios["default"].get("".concat(API_URL, "/users/").concat(id)));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.getUserById = getUserById;

var updateUser = function updateUser(id, updatedData) {
  return regeneratorRuntime.async(function updateUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", _axios["default"].put("".concat(API_URL, "/users/").concat(id), updatedData));

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.updateUser = updateUser;

var deleteUser = function deleteUser(id) {
  return regeneratorRuntime.async(function deleteUser$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", _axios["default"]["delete"]("".concat(API_URL, "/users/").concat(id)));

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.deleteUser = deleteUser;
//# sourceMappingURL=api.dev.js.map
