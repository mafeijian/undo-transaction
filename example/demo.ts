import express, { Application } from 'express';
import { Doc } from './Business/Doc';
import { Transaction } from '../src/Transaction';

const app: Application = express();
const router = express.Router()

const port = 8008;
app.listen(port, () => {
  const doc = new Doc();
  doc.transactionContext.openTransaction(new Transaction('change doc version'))
  doc.version = 41;
  doc.version = 42;
  doc.transactionContext.commitTransaction(doc.transactionContext.activeTransaction);
  doc.transactionContext.openTransaction(new Transaction('change arch object id'))
  doc.archObj1.id = 'arch name wall';
  doc.archObj1.id = 'arch name floor';
  doc.transactionContext.commitTransaction(doc.transactionContext.activeTransaction);

  doc.transactionContext.openTransaction(new Transaction('change arch object id again'))
  doc.archObj1.id = 'arch name pipe';
  doc.archObj1.id = 'arch name cabinet';
  doc.transactionContext.commitTransaction(doc.transactionContext.activeTransaction);

  doc.transactionContext.openTransaction(new Transaction('change arch object id again and again'))
  doc.archObj1.id = 'arch name door';
  doc.archObj1.id = 'arch name window';
  doc.transactionContext.abortTransaction(doc.transactionContext.activeTransaction);
  console.log(`Doc: ${doc.toJSON()}`);
  console.log(`${doc.transactionContext.dump()}`);
});
