import { Pair } from "./Pair";

export class PropertyChangeInfo {
    changeInfo: Pair<any, any>; // [old, new]
    constructor(oldValue: any, newValue: any) {
        this.changeInfo = new Pair(oldValue, newValue);
    }
}