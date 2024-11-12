import { ObjectCommitInfo } from "./ObjectCommitInfo";

// capture undo image for any property change of many objects during transaction lifetime.
export class UndoCap {
    committedObjs: Map<any, ObjectCommitInfo> = new Map();

    commit(target: any, property: string, oldValue: any, newValue: any) {
        if (!this.committedObjs.has(target)) {
            this.committedObjs.set(target, new ObjectCommitInfo);
        }
        this.committedObjs.get(target).commit(property, oldValue, newValue);
    }

    recover() {
        this.committedObjs.forEach((obj, target) => obj.recover(target));
    }

    dump() {
        let caption = [];
        this.committedObjs.forEach((objCommitInfo, target) => {
            caption.push(`commit object ${target.className} <-> ${objCommitInfo.dump()}`);
        });
        return `capture:{${caption.join(',')}}`;
    }
}
