"use strict";

var express = require("express");

var _require = require("../controllers/userController"),
    createUser = _require.createUser,
    getUsers = _require.getUsers,
    getUserById = _require.getUserById,
    updateUser = _require.updateUser,
    deleteUser = _require.deleteUser;

var router = express.Router(); // ✅ Create a user (POST)

router.post("/", createUser); // ✅ Get all users (GET)

router.get("/", getUsers); // ✅ Get a user by ID (GET)

router.get("/:id", getUserById); // ✅ Update a user by ID (PUT)

router.put("/:id", updateUser); // ✅ Delete a user by ID (DELETE)

router["delete"]("/:id", deleteUser);
module.exports = router;
//# sourceMappingURL=userRoutes.dev.js.map
