import { TransactionContext } from "./TransactionContext";

export class SerializableObject {
    hash: any;
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