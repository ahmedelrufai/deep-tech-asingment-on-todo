const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.ATLAS_URI;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
const router = require("./routes/todo");
app.use("/", router);

app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});
