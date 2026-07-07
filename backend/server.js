import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import Product from './model/productModel.js';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoute.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes); 


connectDB().then(() => {
  app.listen(5000, (req, res) => {
  console.log('Server is running on port 5000');
});
})

// SDzytvkCqQeVhLqQ