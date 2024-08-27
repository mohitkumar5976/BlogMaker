const express = require("express");
const { initializeDb } = require("./db/dbConfig");

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server Error:", err); // Log error details
  return res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});

// Start server after database connection is established
const startServer = async () => {
  try {
    await initializeDb(); // Ensure the database is connected
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  } catch (err) {
    console.error("Failed to connect to the database:", err);
    process.exit(1); // Exit the process if the database connection fails
  }
};

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("SIGINT signal received: closing HTTP server");
  await mongoose.connection.close(); // Close the database connection
  process.exit(0);
});

startServer();
