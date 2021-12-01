import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { dummyData } from '../client/src/dummyData';

// Controllers (route handlers)
import * as orderController from './controllers/order';
import * as productController from './controllers/shopify';

// initialize configuration
dotenv.config();

const PORT = process.env.SERVER_PORT;

const app = express();
app.use(express.json());

// 4. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/shopfront')
  .then(() => { console.log('Connected to MongoDB') })
  .catch(err => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
  });

// Primary app routes

app.get('/api', (req: Request, res: Response): void => {
  res.json(dummyData);
});

// Products route
app.get('/api/products', productController.getProducts);

// Order related routes
app.get('/api/orders', orderController.getOrders);

app.post('/api/orders', orderController.addOrder);

app.put('/api/orders/:id', orderController.updateOrder);

app.delete('/api/orders/:id', orderController.deleteOrder);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
