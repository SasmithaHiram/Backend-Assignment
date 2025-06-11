const userService = require("../service/userService");

exports.register = async (req, res) => {
  try {
    const user = userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = userService.loginUser(req.body.username);
    if (!user || user.password !== req.body.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
