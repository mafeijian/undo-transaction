import { DeclareObject } from "../../src/Transaction/DeclareObject";

@DeclareObject('Point2d')
export class Point2d {
    coord: number[];
}