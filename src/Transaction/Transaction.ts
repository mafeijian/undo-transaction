import { UndoCap } from "./UndoCap";

export class Transaction {
    name: string;

    isOpen: boolean;

    capture: UndoCap;

    constructor(name: string) {
        this.name = name;
        this.isOpen = true;
    }

    commit() {

        this.isOpen = false;
    }

    abort() {
        if (this.isOpen) {
            this.isOpen = false;
        }
    }

    onPropertyChanged(className: string, property: string, hash: any, oldValue: any, newValue: any) {
        console.log(`${className}.${property} ${hash} change from ${oldValue} to ${newValue}`);
    }
}