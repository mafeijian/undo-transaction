import express, { Application } from 'express';
import { Doc } from './Business/Doc';

const app: Application = express();
const router = express.Router()

const port = 8008;
app.listen(port, () => {
  const doc = new Doc();
  doc.version = 41;
  doc.version = 42;
  console.log(`Doc: ${doc.toJSON()}`);
});
