import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import db from '../database';

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

// interface LocationWithTimezone {
//   location: string;
//   timezoneName: string;
//   timezoneAbbr: string;
//   utcOffset: number;
// };

// const getLocationsWithTimezones = (req: Request, res: Response, next: NextFunction) => {
//   const locations: LocationWithTimezone[] = [
//     {
//       location: 'Germany',
//       timezoneName: 'Central European Time',
//       timezoneAbbr: 'CET',
//       utcOffset: 1
//     },
//     {
//       location: 'China',
//       timezoneName: 'China Standard Time',
//       timezoneAbbr: 'CST',
//       utcOffset: 8
//     },
//     {
//       location: 'Argentina',
//       timezoneName: 'Argentina Time',
//       timezoneAbbr: 'ART',
//       utcOffset: -3
//     },
//     {
//       location: 'Japan',
//       timezoneName: 'Japan Standard Time',
//       timezoneAbbr: 'JST',
//       utcOffset: 9
//     }
//   ];

//   res.status(200).json(locations);
// };

// app.get('/timezones', getLocationsWithTimezones);