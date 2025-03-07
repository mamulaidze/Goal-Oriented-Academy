import { User } from "../models/user.model.js";

export const getUserApi = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postUserApi = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUserApi = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUserApi = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const updateUser = await User.findByIdAndUpdate(id, body, { new: true, runValidators: true });

    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};
