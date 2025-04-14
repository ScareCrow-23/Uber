const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.route");
const captainRoute = require("./routes/captain.route");
const cookieParser = require("cookie-parser");

connectToDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoute);

module.exports = app;
