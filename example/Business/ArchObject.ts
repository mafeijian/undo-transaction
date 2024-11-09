import { DeclareObject } from "../../src/Transaction/DeclareObject";
import { DeclareProperty } from "../../src/Transaction/DeclareProperty";
import { SerializableObject } from "../../src/Transaction/SerializableObject";
import { Point2d } from "./Point2d";

@DeclareObject('ArchObject')
export class ArchObject extends SerializableObject {

    @DeclareProperty
    id: string;

    // @DeclareProperty
    startPnt: Point2d;

    // @DeclareProperty
    endPnt: Point2d;
}