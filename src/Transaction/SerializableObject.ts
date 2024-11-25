import { ISerializableObject } from "../ISerializableObject";
import { TransactionContext } from "./TransactionContext";

export class SerializableObject implements ISerializableObject {
    hash: any;

    // default consturctor necessary for document loading
    constructor() {
        this.hash = {}
    }

    getProp(property: string) {
        return this.hash[property];
    }

    setProp(property: string, value: any) {
        TransactionContext.getTransactionContext().onPropertyChanged(this as any, property, this.getProp(property), value);
        this.hash[property] = value;
        return this.hash[property];
    }
}