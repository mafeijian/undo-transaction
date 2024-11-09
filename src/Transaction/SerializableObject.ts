import { TransactionHost } from "./TransactionHost";

export class SerializableObject {
    hash: any;
    constructor() {
        this.hash = {}
    }
    getProp(property: string) {
        return this.hash[property];
    }
    setProp(property: string, value: any) {
        TransactionHost.getTransactionHost().onPropertyChanged((this as any).className, property, this.hash, this.getProp(property), value);
        this.hash[property] = value;
        return this.hash[property];
    }
}