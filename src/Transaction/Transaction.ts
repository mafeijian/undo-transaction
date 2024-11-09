import { UndoCap } from "./UndoCap";

export class Transaction {
    name: string;

    isOpen: boolean;

    capture: UndoCap;

    constructor(name: string) {
        this.name = name;
        this.isOpen = true;
        this.capture = new UndoCap();
    }

    commit() {

        this.isOpen = false;
    }

    abort() {
        if (this.isOpen) {
            this.isOpen = false;
        }
    }

    onPropertyChanged(target: any, property: string, oldValue: any, newValue: any) {
        console.log(`${target.className}.${property} ${target.hash} change from ${oldValue} to ${newValue}`);
        this.capture.commit(target, property, oldValue, newValue);
    }
}