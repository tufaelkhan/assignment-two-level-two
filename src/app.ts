import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CustomerRoute } from './app/modules/customer/customer.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/users', CustomerRoute);

const getData = (req: Request, res: Response) => {
  res.send('hello world');
};
app.get('/', getData);

export default app;
