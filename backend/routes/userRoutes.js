const express = require("express");
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require("../controllers/userController");

const router = express.Router();

// ✅ Create a user (POST)
router.post("/", createUser);

// ✅ Get all users (GET)
router.get("/", getUsers);

// ✅ Get a user by ID (GET)
router.get("/:id", getUserById);

// ✅ Update a user by ID (PUT)
router.put("/:id", updateUser);

// ✅ Delete a user by ID (DELETE)
router.delete("/:id", deleteUser);

module.exports = router;
