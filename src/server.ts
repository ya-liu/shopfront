import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import db from './models/Order';

// initialize configuration
dotenv.config();

const PORT = process.env.SERVER_PORT;

const app = express();
app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the server!' });
});

app.get('/api/orders', (req: Request, res: Response) => {
  db.findAll()
    .then((orders) => res.json(orders))
    .catch((err) => console.error(err));
});

app.post('/api/orders', (req: Request, res: Response) => {
  db.save(req.body)
    .then(() => res.status(201).end())
    .catch((err) => console.error(err))
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
