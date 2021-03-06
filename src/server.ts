import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import path from 'path';
import mongoose from 'mongoose';

// Controllers (route handlers)
import * as orderController from './controllers/order';
import * as productController from './controllers/shopify';

// initialize configuration
dotenv.config();

const PORT = process.env.SERVER_PORT;

const mongoURI = process.env.MONGODB_URI;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// 4. Connect to MongoDB
mongoose.connect(mongoURI || 'mongodb://localhost:27017/shopfront')
  .then(() => { console.log('Connected to MongoDB') })
  .catch(err => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
  });

// Primary app routes

app.get('/api', (req: Request, res: Response): void => {
  res.json({ message: 'Server says hello!' });
});

// Products route
app.get('/api/products', productController.getProducts);

// Order related routes
app.get('/api/orders', orderController.getOrders);

app.get('/api/order/', orderController.getOneOrder);

app.post('/api/orders', orderController.addOrder);

app.put('/api/orders/:id', orderController.updateOrder);

app.delete('/api/orders/:id', orderController.deleteOrder);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  // console.log(`Server listening on port ${process.env.PORT}`);
});
