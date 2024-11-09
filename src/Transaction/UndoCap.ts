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
}
