import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';

// initialize configuration
dotenv.config();

const PORT = process.env.SERVER_PORT;

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

interface LocationWithTimezone {
  location: string;
  timezoneName: string;
  timezoneAbbr: string;
  utcOffset: number;
};

const getLocationsWithTimezones = (req: Request, res: Response, next: NextFunction) => {
  let locations: LocationWithTimezone[] = [
    {
      location: 'Germany',
      timezoneName: 'Central European Time',
      timezoneAbbr: 'CET',
      utcOffset: 1
    },
    {
      location: 'China',
      timezoneName: 'China Standard Time',
      timezoneAbbr: 'CST',
      utcOffset: 8
    },
    {
      location: 'Argentina',
      timezoneName: 'Argentina Time',
      timezoneAbbr: 'ART',
      utcOffset: -3
    },
    {
      location: 'Japan',
      timezoneName: 'Japan Standard Time',
      timezoneAbbr: 'JST',
      utcOffset: 9
    }
  ];

  res.status(200).json(locations);
};

app.get('/timezones', getLocationsWithTimezones);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
