const express = require("express");
const app = express();
const db = require("./db");

const passport = require('./auth/passport'); // import from auth folder

app.use(express.json());


// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toLocaleString()} Request Made to: ${req.originalUrl}`);
  next();
});

app.use(passport.initialize());


// Import routes
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");


// Use routes
app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);


app.get("/", (req, res) => {
  res.send("Welcome to Our Hotel");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});