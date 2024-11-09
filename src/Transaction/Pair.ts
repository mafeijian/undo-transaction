export class Pair<K,V> {
    first: K;
    second: V;
    constructor(k: K, v: V) {
        this.first = k;
        this.second = v;
    }

    dump() {
        return `{${JSON.stringify(this.first)},${JSON.stringify(this.second)}}`
    }
}