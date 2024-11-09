import express, { Application } from 'express';
import { Doc } from './Business/Doc';
import { Transaction } from '../src/Transaction/Transaction';

const app: Application = express();
const router = express.Router()

const port = 8008;
app.listen(port, () => {
  const doc = new Doc();
  doc.transactionContext.openTransaction(new Transaction('change arch object id'))
  doc.version = 41;
  doc.version = 42;
  doc.transactionContext.commitTransaction(doc.transactionContext.activeTransaction);
  console.log(`Doc: ${doc.toJSON()}`);
  console.log(`${doc.transactionContext.dump()}`);
});
