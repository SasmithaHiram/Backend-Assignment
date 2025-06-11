const userRepository = require("../repositories/userRepository");

exports.registerUser = async (userData) => {
  return await userRepository.createUser(userData);
};

exports.loginUser = async (username) => {
  return await userRepository.findByUsername(username);
};
