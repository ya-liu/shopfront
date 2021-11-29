import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { OrderDocument } from './models/Order';
import * as orderController from './controllers/order';

// initialize configuration
dotenv.config();

const PORT = process.env.SERVER_PORT;

const app = express();
app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the server!' });
});

app.get('/api/orders', (req: Request, res: Response) => {
  orderController.findAll()
    .then((orders: OrderDocument[]) => res.json(orders))
    .catch((err: TypeError) => console.error(err));
});

app.post('/api/orders', (req: Request, res: Response) => {
  orderController.save(req.body)
    .then(() => res.status(201).end())
    .catch((err: TypeError) => console.error(err))
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
