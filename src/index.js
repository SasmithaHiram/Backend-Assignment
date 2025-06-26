const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "PUT", "DELETE", "GET"],
    credential: true,
  })
);
app.use(bodyParser.json());
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

mongoose
  .connect(
    "mongodb+srv://sasmithahiram2003:123@cluster0.7kvyryq.mongodb.net/furturecodetechnology?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
