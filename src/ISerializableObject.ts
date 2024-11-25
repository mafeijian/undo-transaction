export interface ISerializableObject {
    getProp(property: string);
    setProp(property: string, value: any);
}