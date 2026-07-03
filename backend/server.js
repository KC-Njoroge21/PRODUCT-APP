import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from backend!. Welcome to the Products App");
})

connectDB().then(() => {
  app.listen(5000, (req, res) => {
  console.log('Server is running on port 5000');
});
})

// SDzytvkCqQeVhLqQ