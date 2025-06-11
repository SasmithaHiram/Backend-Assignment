const User = require("../models/user");

exports.createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

exports.findByUsername = async (username) => {
  return await User.findOne({ username });
};
