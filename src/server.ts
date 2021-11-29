import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { OrderDocument } from './models/Order';

// Controllers (route handlers)
import * as orderController from './controllers/order';

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

app.get('/api/orders', (req: Request, res: Response) => {
  orderController.findAll()
    .then((orders: OrderDocument[]) => res.json(orders))
    .catch((err: Error) => console.error(err));
});

app.post('/api/orders', (req: Request, res: Response) => {
  orderController.save(req.body)
    .then(() => res.status(201).end())
    .catch((err: Error) => console.error(err))
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
