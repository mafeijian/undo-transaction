import { PropertyChangeInfo } from "./PropertyChangeInfo";

// commit infomation for a single object
export class ObjectCommitInfo {
    hash: any = {}; // in change time order

    commit(property: string, oldValue: any, newValue: any) {
        // create: [x -> a]
        // change: [a -> b]
        // delete: [a -> x]
        if (property in this.hash) {
            (this.hash[property] as PropertyChangeInfo).changeInfo.second = newValue; // merge itself
        } else {
            this.hash[property] = new PropertyChangeInfo(oldValue, newValue); // create new entry
        }
    }

    recover(target: any) {
        Object.keys(this.hash).forEach(property => {
            const changeInfo = this.hash[property] as PropertyChangeInfo;
            const oldValue = changeInfo.changeInfo.first;
            target[property] = oldValue;
        });
    }

    dump() {
        let caption = '';
        const keys = Object.keys(this.hash);
        for (let i = 0; i < keys.length; ++i) {
            caption += `property ${keys[i]} changed with ${this.hash[keys[i]].dump()}`;
        }
        return `{${caption}}`;
    }
}