export class Pair<K,V> {
    first: K;
    second: V;
    constructor(k: K, v: V) {
        this.first = k;
        this.second = v;
    }
}