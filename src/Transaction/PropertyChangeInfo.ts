import { Pair } from "..";

export class PropertyChangeInfo {
    changeInfo: Pair<any, any>; // [old, new]
    constructor(oldValue: any, newValue: any) {
        this.changeInfo = new Pair(oldValue, newValue);
    }

    dump() {
        return `{changeInfo:${this.changeInfo.dump()}}`
    }
}