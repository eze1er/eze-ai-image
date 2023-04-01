import { Express } from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = Express();
app.use(cors());
app.use(Express.json({ Limit: '50mb'}));

app.get('/', async (req, res) => {
  res.send('Hello from EZE-AI IMAGE!')
})