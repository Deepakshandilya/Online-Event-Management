const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.ATLAS_URI)
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
  });

// Import and use event routes
const eventRouter = require('./routes/event.routes');
app.use('/api/events', eventRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
