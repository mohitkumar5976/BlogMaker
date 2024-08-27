const mongoose = require('mongoose');

class DbConnection {
  static async createConnection() {
    try {
      await mongoose.connect('mongodb://localhost:27017/blogmaker', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
      return mongoose.connection;
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
      throw err; // Re-throw the error to handle it in the application
    }
  }
}

// Example usage in an asynchronous context
const initializeDb = async () => {
  try {
    const db = await DbConnection.createConnection();
    // Use the db connection here
    return db;
  } catch (err) {
    console.error('Failed to initialize database:', err);
    process.exit(1); // Exit the process if connection fails
  }
};


module.exports = { initializeDb };
