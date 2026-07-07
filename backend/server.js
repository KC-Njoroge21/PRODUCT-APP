import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import Product from './model/productModel.js';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoute.js';
import cors from 'cors';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({origin: 'http://localhost:5000'}));

app.use("/api/products", productRoutes); 


connectDB().then(() => {
  app.listen(PORT, (req, res) => {
  console.log('Server is running on port 5000');
});
})

