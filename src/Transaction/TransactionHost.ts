import { Transaction } from "./Transaction";
import { UndoCap } from "./UndoCap";

export class TransactionHost {
    static host: TransactionHost;

    undolist: UndoCap[];

    activeTransaction: Transaction;

    static getTransactionHost() {
        if (!TransactionHost.host) {
            TransactionHost.host = new TransactionHost();
        }
        return TransactionHost.host;
    }

    openTransaction(tr: Transaction) {
        this.activeTransaction = tr;
    }

    commitTransaction(tr: Transaction) {
        // commit the transaction

    }

    abortTransaction(tr: Transaction) {
        // recover the backup data
    }

    onPropertyChanged(className: string, property: string, hash: any, oldValue: any, newValue: any) {
        console.log(`${className}.${property} ${hash} change from ${oldValue} to ${newValue}`);
    }
}