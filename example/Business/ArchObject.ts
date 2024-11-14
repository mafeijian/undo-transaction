import { DeclareObject, DeclareProperty, SerializableObject } from "../../src/Transaction";
import { Point2d } from "./Point2d";

@DeclareObject('ArchObject')
export class ArchObject extends SerializableObject {

    @DeclareProperty
    id: string;

    // @DeclareProperty
    startPnt: Point2d;

    // @DeclareProperty
    endPnt: Point2d;

    constructor() {
        super();
        this.id = '';
    }
}