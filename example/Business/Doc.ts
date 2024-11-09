
import { DeclareObject } from "../../src/Transaction/DeclareObject";
import { DeclareProperty } from "../../src/Transaction/DeclareProperty";
import { SerializableObject } from "../../src/Transaction/SerializableObject";
import { Transaction } from "../../src/Transaction/Transaction";
import { TransactionContext } from "../../src/Transaction/TransactionContext";
import { ArchObject } from "./ArchObject";

@DeclareObject('Doc')
export class Doc extends SerializableObject{

    // non serializable
    transactionContext: TransactionContext

    @DeclareProperty
    version: number;

    @DeclareProperty
    archObj1: ArchObject;

    constructor() {
        super();
        this.transactionContext = TransactionContext.getTransactionContext();
        this.transactionContext.openTransaction(new Transaction('init arch object'));
        this.archObj1 = new ArchObject;
        this.transactionContext.commitTransaction(this.transactionContext.activeTransaction);
    }

    fromJSON(partial: string) {
        // initiate archObjs from partial doc
    }

    toJSON() {
        return `${(this as any).className},${(this as any).serializedFields}`;
    }
}

