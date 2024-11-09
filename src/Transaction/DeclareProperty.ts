import { SerializableObject } from "./SerializableObject";

const DeclareProperty = (clazz: any, property: string) => {
    if (!clazz.serializedFields || !Array.isArray(clazz.serializedFields)) {
        clazz.serializedFields = [];
    }
    clazz.serializedFields.push(property);
    Object.defineProperty(clazz, property, {
        get(this: SerializableObject) {
            return this.getProp(property);
        },
        set(this: SerializableObject, v: any) {
            return this.setProp(property, v);
        }
    });
}

export { DeclareProperty }