const mongoose = require('mongoose');

//Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' // Replace 'mydatabase' with your database name

// Set up MongoDB connection
// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })

mongoose.connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
  
  process.on("SIGINT", async () => {
  console.log("Server is shutting down...");

  await mongoose.connection.close();

  console.log("MongoDB Disconnected");

  process.exit(0);
});

// Get the default Connection 
// Mongoose maintains a default connection object representing the MongoDB  connection.

const db = mongoose.connection;

// Define event listeners for database connection

// db.on('connected', () => {
//     console.log('Connected to MongoDB server');
    
// })
// db.on('error', (err) => {
//     console.error('MongoDB connection  error:', err);
    
// })
// db.on('disconnected', () => {
//     console.log('MongoDB disconnected');
    
// });

//Export the database connection
module.export = db;
