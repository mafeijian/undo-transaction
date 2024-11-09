
import { DeclareObject } from "../../src/Transaction/DeclareObject";
import { DeclareProperty } from "../../src/Transaction/DeclareProperty";
import { SerializableObject } from "../../src/Transaction/SerializableObject";
import { ArchObject } from "./ArchObject";

@DeclareObject('Doc')
export class Doc extends SerializableObject{
    @DeclareProperty
    version: number;
    // @DeclareProperty
    archObjs: ArchObject[];
    constructor() {
        super();
        this.archObjs = [];
        this.archObjs.push(new ArchObject)
    }
    fromJSON(partial: string) {
        // initiate archObjs from partial doc
    }
    toJSON() {
        return `${(this as any).className},${(this as any).serializedFields}`;
    }
}

