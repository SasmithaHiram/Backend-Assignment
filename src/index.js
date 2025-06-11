const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/api/user", userRoutes);
app.use("/api/prodcut", productRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

mongoose
  .connect("mongodb://localhost:27017/furturecodetechnology")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
