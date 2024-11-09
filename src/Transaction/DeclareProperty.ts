import { SerializableObject } from "./SerializableObject";

const DeclareProperty = (clazz: any, property: string) => {
    if (!clazz.serializableFields || !Array.isArray(clazz.serializableFields)) {
        clazz.serializableFields = [];
    }
    clazz.serializableFields.push(property);
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