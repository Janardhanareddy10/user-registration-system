const User = require("../models/User");


const createUser = async (req, res) => {
  try {
    const { name, age, dob, gender, about } = req.body;

    if (!name || !age || !dob || !gender) {
      return res.status(400).json({ message: "All fields except 'about' are required" });
    }

    const user = new User({ name, age, dob, gender, about });
    await user.save();
    res.status(201).json({ message: "User registered successfully", user });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
