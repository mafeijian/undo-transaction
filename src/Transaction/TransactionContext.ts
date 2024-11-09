import { Transaction } from "./Transaction";
import { UndoCap } from "./UndoCap";

export class TransactionContext {
    static context: TransactionContext;

    undolist: UndoCap[] = [];

    activeTransaction: Transaction;

    static getTransactionContext() {
        if (!TransactionContext.context) {
            TransactionContext.context = new TransactionContext();
        }
        return TransactionContext.context;
    }

    openTransaction(tr: Transaction) {
        this.activeTransaction = tr;
    }

    commitTransaction(tr: Transaction) {
        // commit the open transaction
        if (tr.isOpen) {
            tr.commit();
            this.undolist.push(tr.capture);
        }
    }

    abortTransaction(tr: Transaction) {
        // recover the backup data for open transaction
        if (tr.isOpen) {
            tr.abort();
        }
    }

    onPropertyChanged(target: any, property: string, oldValue: any, newValue: any) {
        this.activeTransaction.onPropertyChanged(target, property, oldValue, newValue); // make sure to crash it if none transaction is active.
    }

    dump() {
        return JSON.stringify(this.undolist);
    }
}