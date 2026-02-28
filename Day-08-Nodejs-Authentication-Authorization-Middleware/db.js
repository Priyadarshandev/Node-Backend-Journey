const mongoose = require('mongoose');

// MongoDB connection URL
// This connects to a database named "mydb" on your local machine
const mongoURL = 'mongodb://127.0.0.1:27017/mydb';
// const mongoURL = 'mongodb+srv://priyadarshanwork24_db_user:X8HkWgn9hsKeNQpI@hotels.1acdxlw.mongodb.net/';
// const mongoURL = 'mongodb+srv://priyadarshanwork24_db_user:X8HkWgn9hsKeNQpI@hotels.1acdxlw.mongodb.net/';

// Connect to MongoDB
mongoose.connect(mongoURL)
  .then(() => {
    console.log("✅ MongoDB connection established successfully.");
    console.log("📦 Database: mydb");
    console.log("🚀 Your application is now connected to the database.");
  })
  .catch((err) => {
    console.log("❌ Failed to connect to MongoDB.");
    console.error("Error Details:", err.message);
  });

// This runs when you stop the server using Ctrl + C
process.on("SIGINT", async () => {
  console.log("\n⚠️ Server shutdown initiated...");

  await mongoose.connection.close();

  console.log("🔌 MongoDB connection closed safely.");
  console.log("👋 Application terminated successfully.");

  process.exit(0);
});

// Get default mongoose connection object
const db = mongoose.connection;

// Additional event listeners for better understanding

db.on('connected', () => {
  console.log("🔗 Mongoose connected to MongoDB server.");
});

db.on('error', (err) => {
  console.error("⚠️ MongoDB connection error occurred:", err.message);
});

db.on('disconnected', () => {
  console.log("📴 Mongoose disconnected from MongoDB.");
});

// Export database connection
module.exports = db;