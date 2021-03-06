import { Pt, Group, PtLike, GroupLike } from "./Pt";
import { Bound } from "./Bound";
export declare class Create {
    static distributeRandom(bound: Bound, count: number, dimensions?: number): Group;
    static distributeLinear(line: GroupLike, count: number): Group;
    static gridPts(bound: Bound, columns: number, rows: number, orientation?: PtLike): Group;
    static gridCells(bound: Bound, columns: number, rows: number): Group[];
    static radialPts(center: PtLike, radius: number, count: number): Group;
    static noisePts(pts: GroupLike, dx?: number, dy?: number, rows?: number, columns?: number): Group;
    static delaunay(pts: GroupLike): Delaunay;
}
export declare class Noise extends Pt {
    protected perm: number[];
    private _n;
    constructor(...args: any[]);
    initNoise(...args: any[]): void;
    step(x?: number, y?: number): void;
    seed(s: any): void;
    noise2D(): number;
}
export declare type DelaunayShape = {
    i: number;
    j: number;
    k: number;
    triangle: GroupLike;
    circle: Group;
};
export declare type DelaunayMesh = {
    [key: string]: DelaunayShape;
}[];
export declare class Delaunay extends Group {
    private _mesh;
    delaunay(triangleOnly?: boolean): GroupLike[] | DelaunayShape[];
    voronoi(): Group[];
    mesh(): DelaunayMesh;
    neighborPts(i: number, sort?: boolean): GroupLike;
    neighbors(i: number): DelaunayShape[];
    protected _cache(o: any): void;
    protected _superTriangle(): Group;
    protected _triangle(i: number, j: number, k: number, pts?: GroupLike): Group;
    protected _circum(i: number, j: number, k: number, tri: GroupLike | false, pts?: GroupLike): DelaunayShape;
    protected static _dedupe(edges: number[]): number[];
}
