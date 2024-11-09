import { SerializableObject } from "./SerializableObject";

const DeclareProperty = (clazz: any, property: string) => {
    if (!clazz.serializedFields || !Array.isArray(clazz.serializedFields)) {
        clazz.serializedFields = [];
    }
    clazz.serializedFields.push(property);
    Object.defineProperty(clazz, property, {
        get(this: SerializableObject) {
            console.log(`get: ${this}`);
            this.getProp(property);
        },
        set(this: SerializableObject, v: any) {
            console.log(`set: ${JSON.stringify(this)}=${v}`);
            this.setProp(property, v);
        }
    });
}

export { DeclareProperty }