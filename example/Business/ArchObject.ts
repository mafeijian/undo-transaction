import { SerializableObject } from "../../src/Transaction/SerializableObject";
import { Point2d } from "./Point2d";


export class ArchObject extends SerializableObject {
    id: string;
    startPnt: Point2d;
    endPnt: Point2d;
}