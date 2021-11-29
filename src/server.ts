import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

// Controllers (route handlers)
import * as orderController from './controllers/order';
import { Order } from './models/Order';

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
  res.json({ message: 'Hello from the server!' });
});

app.get('/api/orders', orderController.getOrders);

app.put('/api/orders/:id', orderController.updateOrder);

app.delete('/api/orders/:id', orderController.deleteOrder);

app.post('/api/orders', orderController.addOrder);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
